
import { GlobalStyles } from "../../styles/GlobalStyles";


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Header";
import SideBar from "../../components/Admin/SideBar";
import { Outlet, useParams } from "react-router-dom";

import { ContainerAdmin } from "./styles";


export function AdminPage() {
 

  return (
    <>
      <GlobalStyles />
      <Header title="Administrador" subtitle=""/>
      <SideBar />
      <ContainerAdmin>
        <Outlet />
      </ContainerAdmin>
      <ToastContainer />
    </>
  );
}
