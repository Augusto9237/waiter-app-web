import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, authenticated } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    async function checkAuth() {
      await new Promise(resolve => setTimeout(resolve, 200));
      if (user == null && !authenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    }
    checkAuth();
  }, []);

  return children;
}