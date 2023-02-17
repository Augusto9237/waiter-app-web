import { PlusCircle, } from "phosphor-react";
import { useContext, useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";


import { Category } from "../../Client/Category";
import {
    MenuContainer,
    MenuButtons,
    ListCategories,
    ItemCategory,
    ListProducts,
    ItemProduct,
    LoadingContainerCategory,
} from "./styles";

import { FormProduct } from "../FormProduct";
import { api } from "../../../utils/api";
import { CategoryType } from "../../../types/Category";
import { ProductType } from "../../../types/Products";
import LoadingSpinner from "../../LoadingSpinner";
import { AuthContext } from "../../../context/AuthContext";
import { Modal } from "../../Modal";
import { FormCategory } from "../FormCategory";
import { ButtonEdit } from "../ButtonEdit";
import { DeleteButton } from "../DeleteButton";
import { Button } from "../../Button";

export function Menu() {
    const { categories, products, isLoadingCategories, isLoadingProducts, setIsLoadingProducts, setIsLoadingCategories } = useContext(AuthContext);

    const [isVisibleFormCategory, setIsVisibleFormCategory] = useState(false);
    const [isVisibleFormProduct, setIsVisibleFormProduct] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState<null | CategoryType>(null);
    const [selectedProduct, setSeletectedProduct] = useState<null | ProductType>(null);


    function handleEditCategory(category: CategoryType) {
        setSelectedCategory(category);
        setIsVisibleFormCategory(true);
    }

    function handleEditProduct(product: ProductType) {
        setSeletectedProduct(product);
        setIsVisibleFormProduct(true);
    }

    async function handleDeleteCategory(categoryId: string) {
        await api.delete(`/categories/${categoryId}`);
        setIsLoadingCategories(true);
    }

    async function handleDeleteProduct(productId: string) {
        await api.delete(`/products/${productId}`);
        setIsLoadingProducts(true);
    }

    function onClose() {
        setIsVisibleFormCategory(false);
        setIsVisibleFormProduct(false);
        setSelectedCategory(null);
        setSeletectedProduct(null);
        setIsLoadingCategories(true);
        setIsLoadingProducts(true);
    }
    return (
        <>
            <Modal visible={isVisibleFormCategory} onClose={onClose} title={selectedCategory ? 'Editar categoria' : 'Nova categoria'}>
                <FormCategory category={selectedCategory} onClose={onClose} />
            </Modal>

            <Modal visible={isVisibleFormProduct} onClose={onClose} title={selectedProduct ? 'Editar produto' : 'Novo produto'}>
                <FormProduct onClose={onClose} categories={categories} selectedProduct={selectedProduct} />
            </Modal>


            <MenuContainer>
                {isLoadingCategories && isLoadingProducts && (
                    <LoadingContainerCategory>
                        <LoadingSpinner />
                    </LoadingContainerCategory>
                )}

                {!isLoadingCategories && !isLoadingProducts && (
                    <>

                        <MenuButtons>
                            <strong>Categorias</strong>

                            <div>
                                <Button onClick={() => setIsVisibleFormCategory(true)}>
                                    <div className="ContentButtonAdd">
                                        <PlusCircle size={20} />
                                        <span>Categoria</span>
                                    </div>
                                </Button>
                            </div>

                        </MenuButtons>
                        <ListCategories>


                            {
                                categories.map((category) => {
                                    return (
                                        <ItemCategory key={category._id}>
                                            <Category icon={category.icon} name={category.name} />
                                            <div className="edit-category">
                                                <ButtonEdit onClick={() => handleEditCategory(category)} />
                                                <DeleteButton onClick={() => handleDeleteCategory(category._id)} />
                                            </div>
                                        </ItemCategory>
                                    );
                                })
                            }

                        </ListCategories>
                        <MenuButtons>
                            <strong>Produtos</strong>

                            <div>
                                <Button onClick={() => setIsVisibleFormProduct(true)}>
                                    <div className="ContentButtonAdd">
                                        <PlusCircle size={20} />
                                        <span>Produto</span>
                                    </div>
                                </Button>
                            </div>

                        </MenuButtons>
                        <ListProducts>
                            {products.map((product) => {
                                return (

                                    <ItemProduct key={product._id}>
                                        <div className="image-product">
                                            <img src={`http://192.168.100.41:3001/uploads/${product.imagePath}`} alt="" />
                                        </div>
                                        <span>{product.name}</span>
                                        <strong>{formatCurrency(product.price)}</strong>
                                        <div className="edit-product">
                                            <ButtonEdit onClick={() => handleEditProduct(product)} />
                                            <DeleteButton onClick={() => handleDeleteProduct(product._id)} />
                                        </div>
                                    </ItemProduct>

                                );
                            })}
                        </ListProducts>
                    </>
                )}
            </MenuContainer>
        </>
    );
}