import { useState } from "react";
import { CartItem } from "../../../types/CartItem";

import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";
import { CartModal } from "../CartModal";
import { CartContainer, CartContent, CartTotal } from "./styles";

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
        selectedTable={selectedTable}
      />
      <CartContainer>
        <CartContent>
          {!selectedTable &&

            <Button onClick={onOpenModalTable}>Novo Pedido</Button>}


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

              <Button onClick={handleOpenModal} disabled={cartItems.length === 0}>Carrinho</Button>
            </>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
}
