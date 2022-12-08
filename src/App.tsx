import { Header } from "./components/Orders/Header";

import { Orders } from "./components/Orders";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </>
  );
}
