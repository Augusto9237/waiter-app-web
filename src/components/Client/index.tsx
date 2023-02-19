import { useState, useContext } from "react";
import { CategoryType } from "../../types/Category";
import { ProductType } from "../../types/Products";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";


import { ProductsContainer, LoadingContainerProducts } from "./styles";
import LoadingSpinner from "../LoadingSpinner";
import { ClientContext } from "../../context/ClientContext";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../utils/api";

interface ClientProps {
  onAddToCart: (product: ProductType) => void;
  categories: CategoryType[];
  onSelectCategory: (categoryId: string) => Promise<void>;
  isLoadingProducts: boolean
}

export function Client() {
  const { categories } = useContext(AuthContext);
  const { products, setProducts } = useContext(ClientContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ProductType>(
    null
  );

  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);
    setProducts(data);
    setIsLoadingProducts(false);
  }

  function handleOpenModal(product: ProductType) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
      />
      <Categories categories={categories} onSelectCategory={handleSelectCategory} />
      {isLoadingProducts && (
        <LoadingContainerProducts>
          <LoadingSpinner />
        </LoadingContainerProducts>
      )}
      {!isLoadingProducts && (
        <ProductsContainer>
          {products.map((product) => {
            return (
              <ProductCard
                onOpenModal={() => handleOpenModal(product)}
                product={product}
                key={product._id}
                
              />
            );
          })}
        </ProductsContainer>
      )}
    </>
  );
}
