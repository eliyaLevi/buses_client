import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

interface GardsUserProps {
  children: JSX.Element;
}

const GardsUser: React.FC<GardsUserProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? {};
  const a = ["c", "b", "c"];
  if (!user) {
    console.error("user is not provided");
    console.log("user is not provided");
    console.warn("user is not provided");
    console.table(a);
  }

  return user ? children : <Navigate to="/login" />;
};

export default GardsUser;
