import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";


import { Category } from "../../Client/Category";
import {
    MenuContainer,
    MenuButtons,
    ButtonAdd,
    ListCategories,
    ItemCategory,
    ListProducts,
    ItemProduct,
    LoadingContainerCategory,
} from "./styles";
import { FormCategoryModal } from "../FormCategoryModal";
import { FormProductModal } from "../FormProductModal";
import { api } from "../../../utils/api";
import { CategoryType } from "../../../types/Category";
import { ProductType } from "../../../types/Products";
import LoadingSpinner from "../../LoadingSpinner";

export function Menu() {
    const [isVisibleFormCategory, setIsVisibleFormCategory] = useState(false);
    const [isVisibleFormProduct, setIsVisibleFormProduct] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState<null | CategoryType>(null);
    const [selectedProduct, setSeletectedProduct] = useState<null | ProductType>(null);

    useEffect(() => {
        Promise.all([
            api.get('/categories'),
            api.get('/products'),
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data);
            setProducts(productsResponse.data);
            setIsLoading(false);
        });
    }, [isLoading]);

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
        setIsLoading(true);
    }

    async function handleDeleteProduct(productId: string) {
        await api.delete(`/products/${productId}`);
        setIsLoading(true);
    }

    function onClose() {
        setIsVisibleFormCategory(false);
        setIsVisibleFormProduct(false);
        setSelectedCategory(null);
        setSeletectedProduct(null);
        setIsLoading(true);
    }
    return (
        <>
            <FormCategoryModal visible={isVisibleFormCategory} onClose={onClose} category={selectedCategory} />
            <FormProductModal visible={isVisibleFormProduct} onClose={onClose} categories={categories} selectedProduct={selectedProduct} />
            <MenuContainer>
                {isLoading && (
                    <LoadingContainerCategory>
                        <LoadingSpinner />
                    </LoadingContainerCategory>
                )}

                {!isLoading && (
                    <>

                        <MenuButtons>
                            <strong>Categorias</strong>
                            <ButtonAdd onClick={() => setIsVisibleFormCategory(true)}>
                                <PlusCircle size={20} /><span>Categoria</span>
                            </ButtonAdd>
                        </MenuButtons>
                        <ListCategories>


                            {
                                categories.map((category) => {
                                    return (
                                        <ItemCategory key={category._id}>
                                            <Category icon={category.icon} name={category.name} />
                                            <div className="edit-category">
                                                <button
                                                    className="edit-button"
                                                    onClick={() => handleEditCategory(category)}>
                                                    <PencilSimple size={20} />
                                                </button>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => handleDeleteCategory(category._id)}>
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </ItemCategory>
                                    );
                                })
                            }

                        </ListCategories>
                        <MenuButtons>
                            <strong>Produtos</strong>
                            <ButtonAdd onClick={() => setIsVisibleFormProduct(true)}>
                                <PlusCircle size={20} /><span>Produto</span>
                            </ButtonAdd>
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
                                            <button className="edit-button" onClick={() => handleEditProduct(product)}>
                                                <PencilSimple size={20} />
                                            </button>
                                            <button className="delete-button"
                                                onClick={() => handleDeleteProduct(product._id)}
                                            ><Trash size={20} /></button>
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