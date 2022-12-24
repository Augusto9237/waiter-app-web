import { ClipboardText, CurrencyDollar, NotePencil, SquaresFour } from "phosphor-react";
import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  CardContainer,
  CardOrders,
  IconClient,
  ListOrders,
  LoadingContainer,
  StatusOrder,
  TableOrders,
} from "./styles";

import sockectIo from "socket.io-client";
import LoadingSpinner from "../LoadingSpinner";

export default function Admin() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, [orders]);


  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {!isLoading && (
        <>
          <CardContainer>
            <CardOrders>
              <div className="headerCard">
                <span className="icon-avenue"><CurrencyDollar size={24} color=' #11d49a' /></span>
                <span>Receita</span>
              </div>
              <h1>{formatCurrency(100)}</h1>
            </CardOrders>
            <CardOrders>
              <div className="headerCard">
                <span className="icon-orders"><NotePencil size={24} color="#fb8b77" /></span>
                <span>Pedidos</span>
              </div>
              <h1>{orders.length}</h1>
            </CardOrders>
            <CardOrders>
              <div className="headerCard">
                <span className="icon-customers"><SquaresFour size={24} color='#2880f4' /></span>
                <span>Mesas</span>
              </div>
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
                          <StatusOrder status={order.status}>
                            {order.status === "WAITING" && "🕑"}
                            {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                            {order.status === "DONE" && "✅"}
                            <span>{order.status === "WAITING" && "  Fila de espera"}
                              {order.status === "IN_PRODUCTION" && "Em produção"}
                              {order.status === "DONE" && "Pronto"}</span>
                          </StatusOrder>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableOrders>
          </ListOrders>
        </>
      )}
    </>
  );
}
