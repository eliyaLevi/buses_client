import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AdminPage } from "../admin/AdminPage";
import { LoginPage } from "../login/LoginPage";
import { Driver } from "../driver/Driver";

export const DispleyPage = () => {
  const { user } = useContext(AuthContext) ?? {};
  return <>{user?.role === "admin" ? <AdminPage /> : <Driver />}</>;
};
