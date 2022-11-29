import { useEffect } from "react";
import closeIcon from "../../../assets/images/close-icon.svg";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";

import {
  ButtonCloseModal,
  ImageProduct,
  IngredientsContainer,
  ModalBody,
  ModalContent,
  Overlay,
  IngredientItem,
  Footer,
  PriceContainer,
} from "./styles";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | ProductType;
  onAddToCart: (product: ProductType) => void;
}

export function ProductModal({
  visible,
  onClose,
  product,
  onAddToCart,
}: ProductModalProps) {
  if (!visible || !product) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Overlay>
      <ModalBody>
        <ImageProduct image={product.imagePath}>
          <ButtonCloseModal onClick={onClose}>X</ButtonCloseModal>
        </ImageProduct>
        <ModalContent>
          <header>
            <h1>{product.name}</h1>
            <span>{product.description}</span>
          </header>

          {product.ingredients.length > 0 && (
            <IngredientsContainer>
              <h4>Ingredientes</h4>

              {product.ingredients.map((ingredient) => {
                return (
                  <>
                    <IngredientItem key={ingredient._id}>
                      <span>{ingredient.icon}</span>
                      <span>{ingredient.name}</span>
                    </IngredientItem>
                  </>
                );
              })}
            </IngredientsContainer>
          )}
        </ModalContent>
        <Footer>
          <PriceContainer>
            <span>Preço</span>
            <strong>{formatCurrency(product.price)}</strong>
          </PriceContainer>

          <button onClick={handleAddToCart}>Adicionar ao pedido</button>
        </Footer>
      </ModalBody>
    </Overlay>
  );
}
