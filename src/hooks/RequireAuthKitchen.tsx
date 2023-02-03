import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, UserDecode } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export function RequireAuthKitchen({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const recoveredToken = localStorage.getItem("tkn");

  if (recoveredToken) {
    const decodeUser = jwtDecode<UserDecode>(recoveredToken!);

    if (!user && !decodeUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (decodeUser) {
      if (decodeUser.of === "MANANGER" || decodeUser.of === "CLERK") {
        toast.warning('Acesso negado');
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    }
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}