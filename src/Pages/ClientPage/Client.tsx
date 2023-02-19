import { useContext, useState } from "react";
import { HeaderClient } from "../../components/Client/Header";
import { Table } from "../../components/Client/Table";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Outlet, useParams } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { BottomBar } from "../../components/Client/BottomBar";
import { Container } from "./styles";
import { ClientContext } from "../../context/ClientContext";

export function ClientPage() {
  const { isLoading ,selectedTable, setSelectedTable, isTableModalVisible, setIsTableModalVisible, attendants, setCartItems} = useContext(ClientContext);
  const { tableNumber } = useParams();
  const tablestring = tableNumber?.toString();

  const [selectedClient, setSelectedClient] = useState("");
  const [selectedClerk, setSelectedClerk] = useState('');
  const clerkInfo = attendants.filter((clerk) => clerk._id === selectedClerk);
  
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


  return (
    <>
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
          <Container>
            <Outlet/>
          </Container>
          <BottomBar
            selectedTable={selectedTable}
            selectedClerk={selectedClerk}
            selectedClient={selectedClient}
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