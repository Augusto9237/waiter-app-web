import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Routes } from "./routes";
import { ThemeContexProvider } from "./context/themeContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ThemeContexProvider>
      <Routes />
    </ThemeContexProvider>
  </>

);
