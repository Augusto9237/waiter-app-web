import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";
import { categories } from "../../../mocks/categories";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { FormCategoryModal } from "../FormCategoryModal";
import { FormProductModal } from "../FormProductModal ";

import { Category } from "../../Client/Category";
import {
    MenuContainer,
    MenuButtons,
    ButtonCategories,
    ListCategories,
    ItemCategory,
    ListProducts,
    ItemProduct,
} from "./styles";

export function Menu() {
    const [isVisibleFormCategory, setIsVisibleFormCategory] = useState(false);
    const [isVisibleFormProduct, setIsVisibleFormProduct] = useState(false);

    function onClose() {
        setIsVisibleFormCategory(false);
        setIsVisibleFormProduct(false);
    }
    return (
        <>
            <FormCategoryModal visible={isVisibleFormCategory} onClose={onClose} />
            <FormProductModal visible={isVisibleFormProduct} onClose={onClose} />

            <MenuContainer>
                <MenuButtons>
                    <strong>Categorias</strong>
                    <ButtonCategories onClick={() => setIsVisibleFormCategory(true)}>
                        <PlusCircle size={20} /><span>Categoria</span>
                    </ButtonCategories>
                </MenuButtons>
                <ListCategories>
                    {categories.map((category) => {
                        return (
                            <>
                                <ItemCategory key={category._id}>
                                    <Category icon={category.icon} name={category.name} />
                                    <div className="edit-category">
                                        <button className="edit-button"><PencilSimple size={20} /></button>
                                        <button className="delete-button"><Trash size={20} /></button>
                                    </div>
                                </ItemCategory>
                            </>
                        );
                    })}

                </ListCategories>
                <MenuButtons>
                    <strong>Produtos</strong>
                    <ButtonCategories onClick={() => setIsVisibleFormProduct(true)}>
                        <PlusCircle size={20} /><span>Produto</span>
                    </ButtonCategories>
                </MenuButtons>
                <ListProducts>
                    {products.map((product) => {
                        return (
                            <>
                                <ItemProduct key={product._id}>
                                    <div className="image-product">
                                        <img src={product.imagePath} alt="" />
                                    </div>
                                    <span>{product.name}</span>
                                    <strong>{formatCurrency(product.price)}</strong>
                                    <div className="edit-product">
                                        <button className="edit-button"><PencilSimple size={20} /></button>
                                        <button className="delete-button"><Trash size={20} /></button>
                                    </div>
                                </ItemProduct>
                            </>
                        );
                    })}
                </ListProducts>
            </MenuContainer>
        </>
    );
}