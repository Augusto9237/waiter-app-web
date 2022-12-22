import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

import {
    UsersContainer,
    UsersButtons,
    ButtonUsers,
    ListUsers,
    ItemUser,
} from "./styles";
import { FormCategoryModal } from "../FormCategoryModal";
import { api } from "../../../utils/api";
import { CategoryType } from "../../../types/Category";
import { ProductType } from "../../../types/Products";
import { toast } from "react-toastify";

export function Users() {
    const [isVisibleFormCategory, setIsVisibleFormCategory] = useState(false);
    const [isVisibleFormProduct, setIsVisibleFormProduct] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            api.get('/categories'),
            api.get('/products'),
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data);
            setProducts(productsResponse.data);
            setIsLoading(false);
        });
    }, [categories, products]);

    async function handleDeleteCategory(categoryId: string) {
        await api.delete(`/categories/${categoryId}`);
    }

    async function handleDeleteProduct(productId: string) {
        await api.delete(`/products/${productId}`);
    }

    function onClose() {
        setIsVisibleFormCategory(false);
        setIsVisibleFormProduct(false);
    }
    return (
        <>
            <FormCategoryModal visible={isVisibleFormCategory} onClose={onClose} />
            <UsersContainer>
                <UsersButtons>
                    <strong>Usuarios</strong>
                    <ButtonUsers onClick={() => setIsVisibleFormProduct(true)}>
                        <PlusCircle size={20} /><span>Usuario</span>
                    </ButtonUsers>
                </UsersButtons>
                <ListUsers>

                    <ItemUser >
                        <div className="container-icon">
                          🧑‍💼
                        </div>
                        <span>Fulano</span>
                        <span>Gerente</span>
                        <span>*****</span>
                        <div className="edit-product">
                            <button className="edit-button"><PencilSimple size={20} /></button>
                            <button className="delete-button"
                                onClick={() => alert()}
                            ><Trash size={20} /></button>
                        </div>
                    </ItemUser>

                </ListUsers>
            </UsersContainer>
        </>
    );
}