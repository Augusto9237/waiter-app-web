import { Header } from "../../components/Header";

import { Orders } from "../../components/Orders";
import { GlobalStyles } from "../../styles/GlobalStyles";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ContainerOrdersPage } from "./styles";

export function OrdersPage() {
  return (
    <>
      <GlobalStyles />
      <Header title="Pedidos" subtitle="Acompanhe os pedidos dos clientes" />
      <ContainerOrdersPage>
        <Orders />
      </ContainerOrdersPage>
      <ToastContainer position="bottom-center" />
    </>
  );
}