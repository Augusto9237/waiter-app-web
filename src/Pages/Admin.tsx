import { useState } from "react";
import { Client } from "../components/Client";
import { Cart } from "../components/Client/Cart";
import { HeaderClient } from "../components/Client/Header";
import { TableModal } from "../components/Client/TableModal";

import { GlobalStyles } from "../styles/GlobalStyles";
import { CartItem } from "../types/CartItem";
import { ProductType } from "../types/Products";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components/Orders/Header";
import Admin from "../components/Admin";

export function AdminPage() {

  const tableInit = '1';

  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  const [selectedTable, setSelectedTable] = useState('');
  const [selectedClient, setSelectedClient] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedClient(table);
    setSelectedTable(tableInit);
  }

  function handleResetOrder() {
    setCartItems([]);
  }

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
    <>
      <GlobalStyles />
      <Header/>
      <Admin/>
      <ToastContainer />
    </>
  );
}