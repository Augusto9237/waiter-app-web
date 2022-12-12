import React from "react";
import ReactDOM from "react-dom/client";

import { AdminPage } from "./Pages/Admin";
import { ClientPage } from "./Pages/Client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SigInPage } from "./Pages/SigIn";
import { OrdersPage } from "./Pages/Orders";

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
