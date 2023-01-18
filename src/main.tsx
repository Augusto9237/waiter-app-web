import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { AdminPage } from "./Pages/AdminPage";
import { ClientPage } from "./Pages/Client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SigInPage } from "./Pages/SigIn";
import { OrdersPage } from "./Pages/OrdersPage";
import { Orders } from "./components/Orders";
import { Menu } from "./components/Admin/Menu";
import { Users } from "./components/Admin/Users";
import Dashboard from "./components/Admin/Dashboard";
import { GlobalStyles} from "./styles/GlobalStyles";



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
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "users",
        element: <Users />,
      }
    ]
  },
  {
    path: "/client/:tableNumber",
    element: <ClientPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
  //  </React.StrictMode>
);
