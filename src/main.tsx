import ReactDOM from "react-dom/client";

import { ThemeContexProvider } from "./context/themeContextProvider";
import { BrowserRouter } from "react-router-dom";
import { RouteApp } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ThemeContexProvider>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </ThemeContexProvider>
  </>

);
