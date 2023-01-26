import { ReactNode, useEffect, useState } from "react";
import { AuthContext, UserDecode } from "./AuthContext";
import { useAuth } from "./useAuth";
import jwtDecode from "jwt-decode";
import { api } from "../utils/api";
import { Order } from "../types/Order";



import { useNavigate } from "react-router-dom";


interface AuthProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserDecode | unknown>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const auth = useAuth();

    useEffect(() => {
        const recoveredUser = localStorage.getItem("u");
        const token = localStorage.getItem("tkn");

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            setAuthenticated(true);
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, []);



    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
        api.get('/orders')
          .then(({ data }) => {
            setOrders(data);
          });
        }, 500);
          setIsLoading(false);
      }, []);



    async function signin(name: string, password: string) {
        const data = await auth.signin(name, password);
        const decode = jwtDecode(data.token);

        if (data.token && decode) {
            setUser(decode);

            api.defaults.headers.Authorization = `Bearer ${data.token}`;

            localStorage.setItem("u", JSON.stringify(decode));
            localStorage.setItem("tkn", data.token);
            setLoading(true);

            return true;
        }
        return false;
    }

    function signout() {
        localStorage.removeItem("u");
        localStorage.removeItem("tkn");
      
        setUser(null);
       
        api.defaults.headers.Authorization = null;
        navigate("/login");

    }

    return (
        <AuthContext.Provider value={{ user, authenticated, signin, signout, orders, setOrders, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    );
};