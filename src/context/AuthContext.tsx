import { createContext } from "react";

export type UserDecode = {
    iat: number;
    id: string;
    nm: string;
    of: string;
}

export type AuthContextType = {
    user: UserDecode | unknown;
    signin: (name: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
