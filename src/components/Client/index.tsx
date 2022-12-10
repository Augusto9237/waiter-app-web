import { useState } from "react";
import { products } from "../../mocks/products";
import { CategoryType } from "../../types/Category";
import { ProductType } from "../../types/Products";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";


import { Container, ProductsContainer } from "./styles";

interface ClientProps {
  onAddToCart: (product: ProductType) => void;
  categories: CategoryType[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Client({ onAddToCart, categories, onSelectCategory }: ClientProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ProductType>(
    null
  );

  function handleOpenModal(product: ProductType) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <Container>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <Categories  categories={categories} onSelectCategory={onSelectCategory}/>
      <ProductsContainer>
        {products.map((product) => {
          return (
            <ProductCard
              onOpenModal={() => handleOpenModal(product)}
              product={product}
              key={product._id}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </ProductsContainer>
    </Container>
  );
}
