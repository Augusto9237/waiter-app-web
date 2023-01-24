import { createContext } from "react";
import { UserType } from "../types/Users";

export type AuthContextType = {
    user: UserType | null;
    signin: (name: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
