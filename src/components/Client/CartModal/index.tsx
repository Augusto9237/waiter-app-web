import { useEffect } from "react";
import { toast } from "react-toastify";
import { CartItem } from "../../../types/CartItem";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";

import {
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
  onConfirmOrder: () => void;
}

export function CartModal({
  visible,
  onClose,
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
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

  function handleOk() {
    onConfirmOrder();
    toast.success('Pedido confirmado',  {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    onClose();

  }

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
            X
          </button>
        </HeaderModalCart>

        <ModalContent>
          {cartItems.length > 0 ? (
            <>
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
              ))
              }
            </>
          ) : (
            <span>Seu carrinho está vazio</span>
          )}
        </ModalContent>

        <FooterCart>
          <PriceContainer>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </PriceContainer>

          <Button
            onClick={handleOk}
            disabled={cartItems.length === 0}>
            Confirmar pedido
          </Button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayCartModal>
  );
}
