import { ReactNode, useEffect, useState } from "react";
import { AuthContext, UserDecode } from "./AuthContext";
import { useAuth } from "./useAuth";
import jwtDecode from "jwt-decode";
import { api } from "../utils/api";


interface AuthProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<UserDecode | unknown>(null);
    const [loading, setLoading] = useState(false);
    const auth = useAuth();



    useEffect(() => {
        const recoveredUser = localStorage.getItem("u");
        const token = localStorage.getItem("tkn");

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
          }
        
        setLoading(false);
    }, []);



    async function signin(name: string, password: string) {
        const data = await auth.signin(name, password);
        const decode = jwtDecode(data.token);

        if (data.token && decode) {
            setUser(decode);

            api.defaults.headers.Authorization = `Bearer ${data.token}`;

            localStorage.setItem("u", JSON.stringify(decode));
            localStorage.setItem("tkn", data.token);

            return true;
        }
        return false;
    }

    function signout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, }}>
            {children}
        </AuthContext.Provider>
    );
};