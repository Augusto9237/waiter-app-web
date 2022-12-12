
import { GlobalStyles } from "../styles/GlobalStyles";


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components/Orders/Header";
import Admin from "../components/Admin";
import SideBar from "../components/Admin/SideBar";
import { Outlet, useParams } from "react-router-dom";

export function AdminPage() {

  const params = useParams()

  return (
    <>
      <GlobalStyles />
      <Header />
      <SideBar />
        <Outlet/>
      <ToastContainer />
    </>
  );
}
