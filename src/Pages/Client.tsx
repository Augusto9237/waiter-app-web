import { useEffect, useState } from "react";
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
import { CategoryType } from "../types/Category";
import { api } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";

export function ClientPage() {

  const { tableNumber } = useParams();
  const tablestring = tableNumber?.toString();

  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  const [selectedTable, setSelectedTable] = useState('');
  const [selectedClient, setSelectedClient] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  }

  function handleSaveTable(table: string) {
    setSelectedClient(table);
    setSelectedTable(tablestring!);
  }

  function handleResetOrder() {
    setSelectedClient('');
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
      {!selectedTable && (
        <Header title="Bem vindo(a)!" />
      )}
      {selectedTable && (
        <HeaderClient
          selectedClient={selectedClient}
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />
      )}

      {isLoading && (
        <LoadingSpinner />
      )}

      {!isLoading && (
        <>
          <Client
            onAddToCart={handleAddToCart}
            categories={categories}
            onSelectCategory={handleSelectCategory}
            products={products}
          />


          <Cart
            selectedTable={selectedTable}
            selectedClient={selectedClient}
            onAdd={handleAddToCart}
            onDecrement={handleDecrementCartItem}
            cartItems={cartItems}
            onConfirmOrder={handleResetOrder}
            onOpenModalTable={() => setIsTableModalVisible(true)}
          />
        </>
      )}
      <TableModal
        visibleModalTable={isTableModalVisible}
        onCloseModalTable={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
      <ToastContainer />
    </>
  );
}
