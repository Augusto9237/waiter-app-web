import { createContext } from "react";
import { Order } from "../types/Order";
import { CategoryType } from "../types/Category";
import { ProductType } from "../types/Products";
import { UserType } from "../types/Users";
import { PaginationType } from "../types/Pagination";

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
    users: UserType[];
    pagination: PaginationType;
    isLoadingUsers: boolean;
    isLoadingProducts: boolean;
    isLoadingCategories: boolean;
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    setIsLoadingCategories: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoadingProducts: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
    setIsLoadingUsers: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>(null!);
