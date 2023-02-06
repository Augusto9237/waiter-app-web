import { Order } from "../../../types/Order";
import { formatCurrency } from "../../../utils/formatCurrency";

import { Actions, ContainerOrderDetail, OrderDetails } from "./styles";

interface OrderModalProps {
  order: Order | null;

  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderModal({ order, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
  if (!order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <ContainerOrderDetail>
      <header>
        <strong>Mesa {order.table}</strong>
        <span>Atendente: {order.clerk.name}</span>
        <span>Cliente: {order.client}</span>
      </header>

      <div className="status-container">
        <small>Status do Pedido</small>
        <div>
          <span>
            {order.status === "WAITING" && "🕑"}
            {order.status === "IN_PRODUCTION" && "👩‍🍳"}
            {order.status === "DONE" && "✅"}
          </span>

          <strong>
            {order.status === "WAITING" && "  Fila de espera"}
            {order.status === "IN_PRODUCTION" && "Em produção"}
            {order.status === "DONE" && "Pronto"}
          </strong>
        </div>
      </div>
      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img
                src={`http://192.168.100.41:3001/uploads/${product.imagePath}`}
                alt={product.name}
                width="48"
                height="48"
              />

              <span className="quantity">{quantity}x</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>
      </OrderDetails>

      <Actions>

        {order.status !== 'DONE' && (
          <button type="button" className="primary" disabled={isLoading} onClick={onChangeOrderStatus}>

            <span>
              {order.status === 'WAITING' && '👩‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
            </span>
            <strong>{order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir  Pedido'}
            </strong>
          </button>
        )}

        <button
          type="button"
          className="secondary"
          onClick={onCancelOrder}
          disabled={isLoading}
        >
          <span>Cancelar Pedido</span>
        </button>
      </Actions>
    </ContainerOrderDetail>
  );
}
