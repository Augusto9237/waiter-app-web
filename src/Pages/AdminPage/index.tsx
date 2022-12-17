
import { GlobalStyles } from "../../styles/GlobalStyles";


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../../components/Orders/Header";
import SideBar from "../../components/Admin/SideBar";
import { Outlet, useParams } from "react-router-dom";

import { ContainerAdmin } from "./styles";

export function AdminPage() {

  const params = useParams();

  return (
    <>
      <GlobalStyles />
      <Header />
      <SideBar />
      <ContainerAdmin>
        <Outlet />
      </ContainerAdmin>
      <ToastContainer />
    </>
  );
}
