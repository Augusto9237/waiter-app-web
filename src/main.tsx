import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AdminPage } from "./Pages/Admin";
import { ClientPage } from "./Pages/Client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SigInPage } from "./Pages/SigIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigInPage/>,
  },
  {
    path: "/Admin",
    element: <AdminPage/>,
  },
  {
    path: "/client/:tableNumber",
    element: <ClientPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  //  </React.StrictMode>
);
