
import { GlobalStyles } from "../../styles/GlobalStyles";


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import SideBar from "../../components/Admin/SideBar";
import { Outlet } from "react-router-dom";

import { ContainerAdmin } from "./styles";

interface DarkModeProps {
  handleDarkMode: () => void;
}

export function AdminPage({handleDarkMode}:DarkModeProps) {
 

  return (
    <>
      <Header title="Administrador" subtitle="Acompanhe os pedidos dos clientes" handleDarkMode={handleDarkMode}/>
      <SideBar />
      <ContainerAdmin>
        <Outlet />
      </ContainerAdmin>
      <ToastContainer />
    </>
  );
}
