import { useEffect, useState } from "react";
import { CartItem } from "../../../types/CartItem";
import { Order } from "../../../types/Order";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CartModal } from "../CartModal";
import { CartContainer, CartContent } from "./styles";

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
      />
      <CartContainer>
        <CartContent>
          {!selectedTable && <button>Novo Pedido</button>}
          {selectedTable && (
            <>
              <div className="Cart-total">
                Total
                <h1>{formatCurrency(total)}</h1>
              </div>

              <button onClick={handleOpenModal}>Confirmar pedido</button>
            </>
          )}
        </CartContent>
      </CartContainer>
    </>
  );
}
