import { useState } from "react";
import { CartItem } from "../../../types/CartItem";

import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";
import { CartCheckout } from "../CartCheckout";
import { CartContainer, CartContent, CartTotal } from "./styles";
import { Modal } from "../../Modal";
import { ConfirmAccount } from "../ConfirmAccount";

interface CartProps {
  selectedTable: string;
  selectedClerk: string;
  selectedClient: string;
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
  selectedClerk,
  selectedClient,
  onOpenModalTable
}: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleClose() {
    setIsModalVisible(false);
  }

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  return (
    <>
      <Modal title="Itens do Pedido" visible={isModalVisible} onClose={handleClose} >
        <CartCheckout

          cartItems={cartItems}
          onClose={handleClose}
          onAdd={onAdd}
          onDecrement={onDecrement}
          onConfirmOrder={onConfirmOrder}
          selectedTable={selectedTable}
          selectedClerk={selectedClerk}
          selectedClient={selectedClient}
        />
      </Modal>
      <CartContainer>
        <CartContent>
          {!selectedTable &&

            <Button onClick={onOpenModalTable} title="Novo Pedido" />}


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

              <Button onClick={handleOpenModal} disabled={cartItems.length === 0} title="Carrinho" />
            </>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
}
