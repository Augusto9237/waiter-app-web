import { CurrencyDollar, NotePencil, UsersFour } from "phosphor-react";
import { useEffect, useState } from "react";
import { Order } from "../../../types/Order";
import { api } from "../../../utils/api";
import { formatCurrency } from "../../../utils/formatCurrency";
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
import LoadingSpinner from "../../LoadingSpinner";
import { toast } from "react-toastify";
import { formatDate } from "../../../utils/formatDate";

export default function Dashboard() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const sokect = sockectIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    sokect.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
      toast.success('Novo pedido recebido', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });

    setIsLoading(false);
  }, []);


  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
    setIsLoading(false);
  }, []);

  const totalRevenue = orders.reduce(function (accumulator, object) {
    return accumulator + object.total;
  }, 0);

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
                <span className="icon-avenue"><CurrencyDollar size={24} /></span>
                <span>Receita</span>
              </div>
              <h1>{formatCurrency(totalRevenue)}</h1>
            </CardOrders>
            <CardOrders>
              <div className="headerCard">
                <span className="icon-orders"><NotePencil size={24}  /></span>
                <span>Pedidos</span>
              </div>
              <h1>{orders.length}</h1>
            </CardOrders>
            <CardOrders>
              <div className="headerCard">
                <span className="icon-customers"><UsersFour size={24}  /></span>
                <span>Clientes</span>
              </div>
              <h1>0</h1>
            </CardOrders>
          </CardContainer>

          <ListOrders>
            <strong>Relatorio de Pedidos</strong>
            <TableOrders>
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Mesa</th>
                    <th>Valor</th>
                    <th>Atendente</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {

                    return (
                      <tr key={order._id}>
                        <td>
                          <div className="client-info">
                            <IconClient>🙎‍♂️</IconClient>
                            <span>{order.client}</span>
                          </div>
                        </td>
                        <td>
                          {formatDate(new Date(order.createdAt))}
                        </td>

                        <td><span>{order.table}</span></td>
                        <td>{formatCurrency(order.total)}</td>
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
