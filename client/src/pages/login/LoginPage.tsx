import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import PageHeader from "../../componnets/pageHeader/PageHeader";
import TopNavLink from "../../componnets/TopNavLink";

export const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    return () => {
      authContext!.clearError();
    };
  }, []);

  if (!authContext) {
    return <p>Error: User context is not available.</p>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authContext.clearError();
    await authContext.login({ email, password });
  };
  return (
    <>
      <PageHeader title="Login" subtitle="Welcome to the Login page" />
      <form
        onSubmit={handleSubmit}
        className="login-form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Please enter an email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Please enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {authContext.error && (
          <div className="error-message">{authContext.error}</div>
        )}

        <button type="submit">Login</button>
      </form>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <p>
          If you are not registered yet, please{" "}
          <TopNavLink to="/register">register here</TopNavLink>
        </p>
      </div>
    </>
  );
};
