import { createContext } from "react";
import { CartItem } from "../types/CartItem";
import { ProductType } from "../types/Products";
import { UserType } from "../types/Users";

export type ClientContextProps= {
    isLoading: boolean;
    selectedTable: string;
    setSelectedTable: React.Dispatch<React.SetStateAction<string>>;
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    attendants: UserType[];
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    handleAddToCart: (product: ProductType) => void;
    handleDecrementCartItem: (product: ProductType) => void;
    isTableModalVisible: boolean;
    setIsTableModalVisible: (value: React.SetStateAction<boolean>) => void;
}

export const ClientContext = createContext<ClientContextProps>(null!);