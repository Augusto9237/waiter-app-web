import { useState } from "react";
import { Client } from "../components/Client";
import { Cart } from "../components/Client/Cart";
import { HeaderClient } from "../components/Client/Header ";
import { GlobalStyles } from "../styles/GlobalStyles";
import { CartItem } from "../types/CartItem";
import { ProductType } from "../types/Products";

export function ClientPage() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("1");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable("");
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
      <HeaderClient
        selectedTable={selectedTable}
        onCancelOrder={handleResetOrder}
      />
      <Client onAddToCart={handleAddToCart} />
      <Cart
        selectedTable={selectedTable}
        onAdd={handleAddToCart}
        onDecrement={handleDecrementCartItem}
        cartItems={cartItems}
        onConfirmOrder={handleResetOrder}
      />
    </>
  );
}
