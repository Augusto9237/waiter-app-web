
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Admin/Dashboard";
import { Menu } from "./components/Admin/Menu";
import { Orders } from "./components/Orders";
import { AdminPage } from "./Pages/AdminPage";
import { ClientPage } from "./Pages/ClientPage/Client";
import { OrdersPage } from "./Pages/OrdersPage";
import { SigInPage } from "./Pages/SigInPages/SigIn";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Users } from "./components/Admin/Users";
import { useThemeHook } from "./context/themeHook";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth } from "./hooks/RequireAuth";


export function RouteApp() {
    const { theme } = useThemeHook();


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <Routes>
                    <Route path="/client/:tableNumber" element={<ClientPage />} />
                    <Route path="/login" element={<SigInPage />} />
                    <Route path="/" element={<RequireAuth><AdminPage /></RequireAuth>}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/users" element={<Users />} />
                    </Route>
                    <Route path="/orderspanel" element={<RequireAuth><OrdersPage /></RequireAuth>} />
                </Routes>
            </AuthProvider>
        </ThemeProvider>
    );
}