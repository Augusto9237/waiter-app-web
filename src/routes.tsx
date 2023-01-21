
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Admin/Dashboard";
import { Menu } from "./components/Admin/Menu";
import { Orders } from "./components/Orders";
import { AdminPage } from "./Pages/AdminPage";
import { ClientPage } from "./Pages/Client";
import { OrdersPage } from "./Pages/OrdersPage";
import { SigInPage } from "./Pages/SigIn";
import { GlobalStyles} from "./styles/GlobalStyles";
import { Users } from "./components/Admin/Users";
import { useThemeHook } from "./context/themeHook";


export function Routes() {
    const {theme} = useThemeHook();
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
                    element: <Users/>,
                }
            ]
        },
        {
            path: "/client/:tableNumber",
            element: <ClientPage />,
        },
    ]);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}