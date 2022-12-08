import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AdminPage } from "./Pages/Admin";
import { ClientPage } from "./Pages/Client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
