import { useContext, useEffect, useState } from "react";
import { Client } from "../../components/Client";
import { Cart } from "../../components/Client/Cart";
import { HeaderClient } from "../../components/Client/Header";
import { Table } from "../../components/Client/Table";

import { GlobalStyles } from "../../styles/GlobalStyles";
import { CartItem } from "../../types/CartItem";
import { ProductType } from "../../types/Products";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import { api } from "../../utils/api";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserType } from "../../types/Users";
import { Modal } from "../../components/Modal";
import { BottomBar } from "../../components/Client/BottomBar";

export function ClientPage() {
  const { categories } = useContext(AuthContext);

  const { tableNumber } = useParams();
  const tablestring = tableNumber?.toString();

  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  const [selectedTable, setSelectedTable] = useState('');
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedClerk, setSelectedClerk] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [attendants, setAtendants] = useState<UserType[]>([]);
  const clerkInfo = attendants.filter((clerk) => clerk._id === selectedClerk);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

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

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  }

  function handleSaveTable(client: string, clerk: string) {
    setSelectedClerk(clerk);
    setSelectedClient(client);
    setSelectedTable(tablestring!);
    setIsTableModalVisible(false);
  }

  function handleResetOrder() {
    setCartItems([]);
    setSelectedClerk('');
    setSelectedClerk('');
    setSelectedTable('');
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
        <Header title="Bem-vindo(a)" subtitle="" />
      )}
      {selectedTable && (
        <HeaderClient
          selectedClient={selectedClient}
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
          clerkInfo={clerkInfo}
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
            isLoadingProducts={isLoadingProducts}
          />

          <Cart
            selectedTable={selectedTable}
            selectedClerk={selectedClerk}
            selectedClient={selectedClient}
            onAdd={handleAddToCart}
            onDecrement={handleDecrementCartItem}
            cartItems={cartItems}
            onConfirmOrder={handleResetOrder}
            onOpenModalTable={() => setIsTableModalVisible(true)}
          />
        </>
      )}
      <Modal title="Iniciar pedido" visible={isTableModalVisible} onClose={() => setIsTableModalVisible(false)}>
        <Table
          onSave={handleSaveTable}
          attendants={attendants}
        />
      </Modal>
      <ToastContainer />
    </>
  );
}