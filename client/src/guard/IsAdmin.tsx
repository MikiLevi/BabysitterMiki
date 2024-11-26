import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { IParents } from "../interface/parents";

interface IsAdminProps {
  children: JSX.Element;
}
const IsAdmin: React.FC<IsAdminProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? {};
	const miki = user as IParents
  return miki.isAdmin ? children : <Navigate to="/parent" />;
};

export default IsAdmin;
