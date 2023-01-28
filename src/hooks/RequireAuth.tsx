import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user} = useContext(AuthContext);
  const location = useLocation();
  const recoveredUser = localStorage.getItem("u");
  

  if (!user && !recoveredUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}