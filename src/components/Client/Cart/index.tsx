import { useState } from "react";
import { CartItem } from "../../../types/CartItem";

import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CartModal } from "../CartModal";
import { ButtonCart, ButtonNewOrder, CartContainer, CartContent, CartTotal } from "./styles";

interface CartProps {
  selectedTable: string;
  cartItems: CartItem[];
  onAdd: (product: ProductType) => void;
  onDecrement: (product: ProductType) => void;
  onConfirmOrder: () => void;
  onOpenModalTable: () => void;
}
export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
  onOpenModalTable
}: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }


  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <>
      <CartModal
        onClose={() => setIsModalVisible(false)}
        cartItems={cartItems}
        visible={isModalVisible}
        onAdd={onAdd}
        onDecrement={onDecrement}
        onConfirmOrder={onConfirmOrder}
      />
      <CartContainer>
        <CartContent>
          {!selectedTable &&

            <ButtonNewOrder onClick={onOpenModalTable}>Novo Pedido</ButtonNewOrder>}


          {selectedTable && (
            <>
              {cartItems.length > 0 ? (

                <CartTotal >
                  <span>Total</span>
                  <h1>{formatCurrency(total)}</h1>
                </CartTotal>

              ) : (

                <CartTotal >
                  <span>Seu carrinho está vazio</span>
                </CartTotal>

              )}

              <ButtonCart onClick={handleOpenModal} background={cartItems.length > 0 ? '#D73035' : '#999999'} disabled={cartItems.length === 0}>Carrinho</ButtonCart>
            </>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
}
