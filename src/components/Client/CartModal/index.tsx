import { useEffect } from "react";
import closeIcon from "../../../assets/images/close-icon.svg";
import { CartItem } from "../../../types/CartItem";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";

import {
  ButtonCloseModal,
  ModalBodyCart,
  ModalContent,
  OverlayCartModal,
  FooterCart,
  PriceContainer,
  Item,
  ProductContainer,
  QuantityContainer,
  ProductDetails,
  Actions,
  ImageItem,
  HeaderModalCart,
} from "./styles";

interface CartModalProps {
  visible: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onAdd: (product: ProductType) => void;
  onDecrement: (product: ProductType) => void;
}

export function CartModal({
  visible,
  onClose,
  cartItems,
  onAdd,
  onDecrement,
}: CartModalProps) {
  if (!visible) {
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

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <OverlayCartModal>
      <ModalBodyCart>
        <HeaderModalCart>
          <div />
          <strong>Itens do Pedido</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </HeaderModalCart>
        <ModalContent>
          {cartItems.map((cartItem) => (
            <>
              <Item>
                <ProductContainer>
                  <ImageItem>
                    <img src={cartItem.product.imagePath} />
                  </ImageItem>
                  <QuantityContainer>
                    <span>{cartItem.quantity}x</span>
                  </QuantityContainer>

                  <ProductDetails>
                    <strong>{cartItem.product.name}</strong>
                    <span>{formatCurrency(cartItem.product.price)}</span>
                  </ProductDetails>
                </ProductContainer>

                <Actions>
                  <button type="button" onClick={() => onAdd(cartItem.product)}>
                    <span>+</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onDecrement(cartItem.product)}
                  >
                    <span>-</span>
                  </button>
                </Actions>
              </Item>
            </>
          ))}
        </ModalContent>
        <FooterCart>
          <PriceContainer>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </PriceContainer>

          <button onClick={onClose}>Confirmar pedido</button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayCartModal>
  );
}
