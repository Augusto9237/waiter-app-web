import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  CardContainer,
  CardOrders,
  IconClient,
  ListOrders,
  StatusOrder,
  TableOrders,
} from "./styles";

export default function Admin() {

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  return (
    <>
      <CardContainer>
        <CardOrders>
          <span className="icon-avenue">💲</span>
          <span>Receita</span>
          <h1>{formatCurrency(100)}</h1>
        </CardOrders>
        <CardOrders>
          <span className="icon-orders">🧾</span>
          <span>Pedidos</span>
          <h1>10</h1>
        </CardOrders>
        <CardOrders>
          <span className="icon-customers">🪑</span>
          <span>Mesas</span>
          <h1>10/20</h1>
        </CardOrders>
      </CardContainer>
      <ListOrders>
        <strong>Relatorio de Pedidos</strong>
        <TableOrders>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Pedido</th>
                <th>Valor</th>
                <th>Atendente</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <>
                  <tr key={order._id}>
                    <td>
                      <div className="client-info">
                        <IconClient>🙎‍♂️</IconClient>
                        <span>Client</span>
                      </div>
                    </td>
                    <td><span>Product </span></td>
                    <td>{formatCurrency(100)}</td>
                    <td><span>Waiter </span></td>
                    <td>
                      <StatusOrder>
                        🕑 <span>{order.status === "WAITING" && "  Fila de espera"}
                          {order.status === "IN_PRODUCTION" && "Em produção"}
                          {order.status === "DONE" && "Pronto"}</span>
                      </StatusOrder>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </TableOrders>
      </ListOrders>
    </>
  );
}
