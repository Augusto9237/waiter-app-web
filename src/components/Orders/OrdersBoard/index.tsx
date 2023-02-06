import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../../types/Order";
import { api } from "../../../utils/api";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { Modal } from "../../Modal";

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrderBoardProps) {
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

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIstModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.error(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIstModalVisible(false);
  }

  return (
    <Board>
      <Modal title="Pedido" visible={isModalVisible} onClose={handleCloseModal}>
        <OrderModal
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleChangeOrderStatus}
          order={selectedOrder}
          isLoading={isLoading}
        />
      </Modal>

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
              <span>Cliente: {order.client}</span>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
