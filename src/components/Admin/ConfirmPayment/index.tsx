import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Order } from "../../../types/Order";
import { formatCurrency } from "../../../utils/formatCurrency";

import { Actions, ContainerOrderDetail, OrderDetails, SubtotalContent } from "./styles";
interface ConfirmPaymentProps {
  order: Order | null;
  filterPayment: string;
}


export function ConfirmPayment({ order, filterPayment }: ConfirmPaymentProps) {
  if (!order) {
    return null;
  }
  const { orders } = useContext(AuthContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[] | []>([]);

  useEffect(() => {
    if (order) {
      setFilteredOrders(
        orders.filter(orderFiltered => {
          return orderFiltered.client === filterPayment || orderFiltered.table === filterPayment;
        })
      );
    }
  }, [order]);

  return (
    <ContainerOrderDetail>
      <header>
        <strong>Mesa {order.table}</strong>
        <span>Atendente: {order.clerk.name}</span>
        <span>Cliente: {order.client}</span>
      </header>

      <OrderDetails>
        <strong>Itens</strong>
        {filteredOrders.map((orders) => {
          return (
            <div key={orders._id}>
              <div className="order-items">
                {orders.products.map(({ _id, product, quantity }) => (
                  <div className="item" key={_id}>
                    <span className="quantity">{quantity}x</span>
                    <div className="product-details">
                      <strong>{product.name}</strong>
                      <SubtotalContent>
                        <span>{formatCurrency(product.price)}</span>
                        <span>{formatCurrency(product.price * quantity)}</span>
                      </SubtotalContent>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(order.total)}</strong>
        </div>
      </OrderDetails>

      <Actions>

        {order.status !== 'DONE' && (
          <button type="button" className="primary">

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
        >
          <span>Cancelar Pedido</span>
        </button>
      </Actions>
    </ContainerOrderDetail>
  );
}
