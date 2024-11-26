import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? {};
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
