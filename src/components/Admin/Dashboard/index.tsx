/* eslint-disable no-inner-declarations */
import { CurrencyDollar, NotePencil, UsersFour } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import sockectIo from "socket.io-client";

import { formatCurrency } from "../../../utils/formatCurrency";
import {
  CardContainer,
  Cards,
  IconClient,
  ListOrders,
  LoadingContainer,
  StatusOrder,
  TableOrders,
  HeaderListOrders,
  FilterOrders
} from "./styles";


import LoadingSpinner from "../../LoadingSpinner";
import { formatDate } from "../../../utils/formatDate";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { Order } from "../../../types/Order";



export default function Dashboard() {
  const { orders, setOrders, isLoading, setIsLoading } = useContext(AuthContext);
  const [filter, setFilter] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<Order[] | []>([]);
  
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
    setFilteredOrders(orders);
    if (filter === 'client') {
      function sumByClient(orders: Order[]): Order[] {
        const result: Order[] | any = {};
        orders.forEach((order) => {
          if (!result[order.client]) {
            result[order.client] = { ...order, total: 0 };
          }
          result[order.client].total += order.total;
        });
        return Object.values(result);
      }

      const result: Order[] | any = sumByClient(Object.values(orders).flat());
      setFilteredOrders(result);
    }

    if (filter === 'table') {
      function sumByClient(orders: Order[]): Order[] | unknown {
        const result: Order[] | any = {};
        orders.forEach((order) => {
          if (!result[order.table]) {
            result[order.table] = { ...order, total: 0 };
          }
          result[order.table].total += order.total;
        });
        return Object.values(result);
      }

      const result: Order[] | any = sumByClient(Object.values(orders).flat());
      setFilteredOrders(result);
    }
  }, [filter, orders]);


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
            <Cards>
              <div className="headerCard">
                <span className="icon-avenue"><CurrencyDollar size={24} /></span>
                <span>Receita</span>
              </div>
              <h1>{formatCurrency(totalRevenue)}</h1>
            </Cards>
            <Cards>
              <div className="headerCard">
                <span className="icon-orders"><NotePencil size={24} /></span>
                <span>Pedidos</span>
              </div>
              <h1>{orders.length}</h1>
            </Cards>
            <Cards>
              <div className="headerCard">
                <span className="icon-customers"><UsersFour size={24} /></span>
                <span>Clientes</span>
              </div>
              <h1>0</h1>
            </Cards>
          </CardContainer>

          <ListOrders>

            <HeaderListOrders>
              <strong>Relatorio de Pedidos</strong>

              <FilterOrders>
                <span>Filtrar</span>
                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value=''>Todos</option>
                  <option value='client'>Cliente</option>
                  <option value='table'>Mesa</option>
                </select>
              </FilterOrders>

            </HeaderListOrders>

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
                  {filteredOrders.map((order) => {

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
                        <td><span>{order.clerk.name}</span></td>
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
