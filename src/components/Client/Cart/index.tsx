import { useEffect, useState } from "react";
import { CartItem } from "../../../types/CartItem";
import { Order } from "../../../types/Order";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CartModal } from "../CartModal";
import { ButtonCart, CartContainer, CartContent, CartTotal } from "./styles";

interface CartProps {
  selectedTable: string;
  cartItems: CartItem[];
  onAdd: (product: ProductType) => void;
  onDecrement: (product: ProductType) => void;
  onConfirmOrder: () => void;
}
export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
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
          {!selectedTable && <button>Novo Pedido</button>}
          {selectedTable && (
            <>
              {cartItems.length > 0 ? (

                <CartTotal className="Cart-total">
                  Total
                  <h1>{formatCurrency(total)}</h1>
                </CartTotal>

              ) : (

                <CartTotal className="Cart-total">
                  <h1>Seu carrinho está vazio</h1>
                </CartTotal>

              )}

              <ButtonCart onClick={handleOpenModal} background={cartItems.length > 0 ? '#D73035' : '#999999'} disabled={cartItems.length === 0}>Confirmar pedido</ButtonCart>
            </>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
}
