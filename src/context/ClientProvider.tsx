import { ReactNode, useEffect, useState } from "react";
import { CartItem } from "../types/CartItem";
import { ProductType } from "../types/Products";
import { UserType } from "../types/Users";
import { api } from "../utils/api";
import { ClientContext } from "./ClientContext";

interface ClientProps {
    children: ReactNode;
}

export const ClientProvider = ({ children }: ClientProps) => {
    const [selectedTable, setSelectedTable] = useState('');

    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    
    const [products, setProducts] = useState<ProductType[]>([]);
    const [attendants, setAtendants] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        Promise.all([
          api.get('/products'),
          api.get('/attendants'),
        ]).then(([productsResponse, attendantsResponse]) => {
          setProducts(productsResponse.data);
          setAtendants(attendantsResponse.data);
          setIsLoading(false);
        });
      }, []);

      function handleAddToCart(product: ProductType) {
        if (!selectedTable) {
          setIsTableModalVisible(true);
        }
    
        setCartItems((prevState) => {
          const itemIndex = prevState.findIndex(
            (carItem) => carItem.product._id === product._id
          );
    
          if (itemIndex < 0) {
            return prevState.concat({
              quantity: 1,
              product,
            });
          }
    
          const newCartItems = [...prevState];
          const item = newCartItems[itemIndex];
    
          newCartItems[itemIndex] = {
            ...item,
            quantity: item.quantity + 1,
          };
    
          return newCartItems;
        });
      }

      function handleDecrementCartItem(product: ProductType) {
        setCartItems((prevState) => {
          const itemIndex = prevState.findIndex(
            (carItem) => carItem.product._id === product._id
          );
    
          const item = prevState[itemIndex];
          const newCartItems = [...prevState];
    
          if (item.quantity === 1) {
            newCartItems.splice(itemIndex, 1);
    
            return newCartItems;
          }
    
          newCartItems[itemIndex] = {
            ...item,
            quantity: item.quantity - 1,
          };
    
          return newCartItems;
        });
      }

    return (
        <ClientContext.Provider value={{
            selectedTable,
            setSelectedTable,
            products,
            setProducts,
            attendants,
            handleAddToCart,
            handleDecrementCartItem,
            isLoading,
            isTableModalVisible,
            setIsTableModalVisible,
            cartItems,
            setCartItems
        }}>
            {children}
        </ClientContext.Provider>
    );
};
