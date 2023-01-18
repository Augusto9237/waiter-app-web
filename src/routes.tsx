import { Users } from "phosphor-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import { Menu } from "./components/Admin/Menu";
import { Orders } from "./components/Orders";
import { AdminPage } from "./Pages/AdminPage";
import { ClientPage } from "./Pages/Client";
import { OrdersPage } from "./Pages/OrdersPage";
import { SigInPage } from "./Pages/SigIn";
import { GlobalStyles } from "./styles/GlobalStyles";


export function Routes() {
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
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}