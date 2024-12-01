import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IParents } from "../interface/parents";

interface GardsIsAdminProps {
  children: JSX.Element;
}

const GardsIsAdmin: React.FC<GardsIsAdminProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? {};
  const adminUser = user as IParents;

  return adminUser.isAdmin ? children : <Navigate to="/login" />;
};

export default GardsIsAdmin;
