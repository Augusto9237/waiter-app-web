import React from "react";
import ReactDOM from "react-dom/client";

import { AdminPage } from "./Pages/AdminPage";
import { ClientPage } from "./Pages/Client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SigInPage } from "./Pages/SigIn";
import { OrdersPage } from "./Pages/OrdersPage";
import Admin from "./components/Admin";
import { Orders } from "./components/Orders";
import { Menu } from "./components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigInPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "menu",
        element: <Menu/>,
      }
    ]
  },
  {
    path: "/client/:tableNumber",
    element: <ClientPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  //  </React.StrictMode>
);
