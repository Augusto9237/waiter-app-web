import { ReactNode, useEffect, useState } from "react";
import { AuthContext, UserDecode } from "./AuthContext";
import { useAuth } from "../hooks/useAuth";
import jwtDecode from "jwt-decode";
import { api } from "../utils/api";
import { Order } from "../types/Order";

import { useNavigate } from "react-router-dom";
import { ProductType } from "../types/Products";
import { CategoryType } from "../types/Category";
import { UserType } from "../types/Users";
interface AuthProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserDecode | unknown>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);

    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);

    const auth = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("tkn");

        if (token) {
            const decodeUser = jwtDecode(token);

            if (decodeUser && token) {
                setUser(decodeUser);
                setAuthenticated(true);
                api.defaults.headers.Authorization = `Bearer ${token}`;
            }
        }


        setLoading(false);
    }, []);


    useEffect(() => {
        Promise.all([
            api.get('/categories'),
            api.get('/products'),
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data);
            setProducts(productsResponse.data);
            setIsLoadingCategories(false);
            setIsLoadingProducts(false);
        });
    }, [isLoadingCategories, isLoadingProducts]);



    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            api.get('/orders')
                .then(({ data }) => {
                    setOrders(data);
                });
        }, 400);
        setIsLoading(false);

    }, [loading]);

    useEffect(() => {
        if (isLoadingUsers) {
            api.get("/users")
                .then((Response) => {
                    setUsers(Response.data);
                });
            setIsLoadingUsers(false);
        }

    }, [isLoadingUsers]);



    async function signin(name: string, password: string) {
        const data = await auth.signin(name, password);
        const decode = jwtDecode(data.token);

        if (data.token && decode) {
            setUser(decode);

            api.defaults.headers.Authorization = `Bearer ${data.token}`;

            localStorage.setItem("tkn", data.token);
            setLoading(true);

            return data;
        }
        return false;
    }

    function signout() {
    
        localStorage.removeItem("tkn");

        setUser(null);

        api.defaults.headers.Authorization = null;
        navigate("/login");

    }

    return (
        <AuthContext.Provider value={{
            user,
            authenticated,
            signin,
            signout,
            users,
            isLoadingUsers,
            setIsLoadingUsers,
            orders,
            setOrders,
            isLoading,
            setIsLoading,
            categories,
            products,
            setProducts,
            setCategories,
            isLoadingProducts,
            isLoadingCategories,
            setIsLoadingProducts,
            setIsLoadingCategories
        }}>
            {children}
        </AuthContext.Provider>
    );
};