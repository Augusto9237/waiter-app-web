import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { UserType } from "../types/Users";
import { useAuth } from "./useAuth";

interface AuthProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [token, setToken] = useState('');
    const auth = useAuth();

    console.log(token);

    async function signin(name: string, password: string) {
        const data = await auth.signin(name, password);
        if (data.token) {
            setToken(data.token);
            return true;
        }
        return false;
    }

    function signout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};