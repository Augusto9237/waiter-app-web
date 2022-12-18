import { ClipboardText, CurrencyDollar } from "phosphor-react";
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

import sockectIo from "socket.io-client";

export default function Admin() {

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const sokect = sockectIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    sokect.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

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
          <div className="headerCard">
            <span className="icon-avenue"><CurrencyDollar size={24} /></span>
            <span>Receita</span>
          </div>
          <h1>{formatCurrency(100)}</h1>
        </CardOrders>
        <CardOrders>
          <div className="headerCard">
            <span className="icon-orders"><ClipboardText size={24} /></span>
            <span>Pedidos</span>
          </div>
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
                <th>Nº da Mesa</th>
                <th>Valor</th>
                <th>Atendente</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {

                const total = order.products.reduce((total, { product, quantity }) => {
                  return total + product.price * quantity;
                }, 0);

                return (
                  <>
                    <tr key={order._id}>
                      <td>
                        <div className="client-info">
                          <IconClient>🙎‍♂️</IconClient>
                          <span>{order.client}</span>
                        </div>
                      </td>
                      <td><span>{order.table}</span></td>
                      <td>{formatCurrency(total)}</td>
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
                );
              })}
            </tbody>
          </table>
        </TableOrders>
      </ListOrders>
    </>
  );
}
