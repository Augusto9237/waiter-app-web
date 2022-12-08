import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../../types/Order";
import { api } from "../../../utils/api";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder }: OrderBoardProps) {
  const [isModalVisible, setIstModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIstModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIstModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.error(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIstModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        onCancelOrder={handleCancelOrder}
        order={selectedOrder}
        visible={isModalVisible}
        isLoading={isLoading}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
