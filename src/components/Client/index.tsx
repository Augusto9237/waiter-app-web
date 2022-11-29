import { useState } from "react";
import { products } from "../../mocks/products";
import { ProductType } from "../../types/Products";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Products } from "./Products";

import { Container, ProductsContainer } from "./styles";

interface ClientProps {
  onAddToCart: (product: ProductType) => void;
}

export function Client({ onAddToCart }: ClientProps) {
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
      <Categories />
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
