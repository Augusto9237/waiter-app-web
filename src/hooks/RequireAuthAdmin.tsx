import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, UserDecode } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export function RequireAuthAdmin({ children }: { children: JSX.Element  }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const recoveredToken: string | null = localStorage.getItem("tkn");

  try {


    if (recoveredToken) {
      const decodeUser = jwtDecode<UserDecode>(recoveredToken!);

      if (!user && !decodeUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

      if (decodeUser) {
        if (decodeUser.of === "KITCHEN_ASSISTANT" || decodeUser.of === "CLERK") {
          toast.warning('Acesso negado');
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
      }
      return children;
    }
  } catch (error) {
    console.log(error);
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}