import { createContext } from "react";
import { Order } from "../types/Order";
import { CategoryType } from "../types/Category";
import { ProductType } from "../types/Products";

export type UserDecode = {
    iat: number;
    id: string;
    nm: string;
    of: string;
}

export type Data = {
    msg: string;
    token: string;
}

export type AuthContextType = {
    user: UserDecode | unknown;
    signin: (name: string, password: string) => Promise<Data>;
    signout: () => void;
    orders: Order[];
    isLoading: boolean;
    authenticated: boolean;
    categories: CategoryType[];
    products: ProductType[];
    isLoadingProducts: boolean;
    isLoadingCategories: boolean;
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    setIsLoadingCategories: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoadingProducts: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export const AuthContext = createContext<AuthContextType>(null!);
