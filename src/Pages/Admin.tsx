
import { GlobalStyles } from "../styles/GlobalStyles";


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components/Orders/Header";
import Admin from "../components/Admin";
import SideBar from "../components/Admin/SideBar";

export function AdminPage() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <SideBar />
      <Admin />
      <ToastContainer />
    </>
  );
}
