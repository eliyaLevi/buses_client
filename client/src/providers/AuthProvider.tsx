import { createContext, ReactNode, useEffect, useState } from "react";
import { Iusers } from "../interface/users";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface UserDTO {
  email: string;
  password: string;
}

interface AuthContextType {
  role: string;
  user: Iusers | null;
  error: string | null;
  login: (user: UserDTO) => Promise<boolean>;
  logout: () => Promise<boolean>;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { POST, VerifyToken, VerifyRefresh, data } = useFetch(
    "http://localhost:3001"
  );

  const [user, setUser] = useState<Iusers | null>(null);
  const [role, setIsAdmin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  useEffect(() => {
    const RoleRefresh = Cookies.get("role");

    const verifyAndLogin = async () => {
      if (RoleRefresh) {
        try {
          const success = await VerifyRefresh(RoleRefresh);

          if (!success) {
            handleLogout();
          }
          setUser(data);
        } catch (error) {
          console.error("Token verification error:", error);
          handleLogout();
        }
      } else {
        setUser(null);
      }
    };

    const handleLogout = () => {
      setUser(null);
      Cookies.remove("auth_token");
      Cookies.remove("role");
      navigate("/login");
    };

    verifyAndLogin();
  }, []);

  const clearError = () => setError(null);

  const login = async (userClient: UserDTO): Promise<boolean> => {
    try {
      clearError();

      // בניית ה-URL הנכון
      let endpoint = "auth/login";

      const response = await POST(endpoint, userClient);

      if (!response || !response.foundUser) {
        console.error("Invalid response:", response);
        throw new Error("Invalid response from server");
      }

      setUser(response.foundUser);

      // // עדכון הקוקיז
      // const role = urlPath === "driver" ? "driver" : "admin";
      // Cookies.set("role", role);

      // ניווט
      // navigate(`${urlPath}`);
      return true;
    } catch (error) {
      console.error("Login error details:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(`Login failed: ${errorMessage}`);
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      clearError();
      await POST("auth/logout");
      setUser(null);
      Cookies.remove("auth_token");
      Cookies.remove("role");
      navigate("/");
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(`Logout failed: ${errorMessage}`);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ role, user, error, login, logout, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
}
