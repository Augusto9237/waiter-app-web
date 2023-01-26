import { createContext } from "react";
import { Order } from "../types/Order";

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
    orders: Order[];
    isLoading: boolean;
    authenticated: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export const AuthContext = createContext<AuthContextType>(null!);
