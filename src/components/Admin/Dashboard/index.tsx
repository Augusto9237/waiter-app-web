/* eslint-disable no-inner-declarations */
import { CurrencyDollar, NotePencil, UsersFour, Wallet } from "phosphor-react";
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
  FilterOrders,
  ActionFilterContainer,
  ButtonPayment
} from "./styles";

import LoadingSpinner from "../../LoadingSpinner";
import { formatDate } from "../../../utils/formatDate";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { Order } from "../../../types/Order";
import { Link } from "react-router-dom";
import { groupAndCountClients } from "../../../utils/groupAndCountClients";
import { Modal } from "../../Modal";
import { ConfirmPayment } from "../ConfirmPayment";
import { Pagination } from "../../Pagination";


export default function Dashboard() {
  const { orders, setOrders, isLoading, setIsLoading } = useContext(AuthContext);
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredOrders, setFilteredOrders] = useState<Order[] | []>([]);
  const [isVisiblePayement, setIsVisiblePayment] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [filterPayment, setFilterPayment] = useState('');


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

    if (filter) {
      const groupKey = filter === 'client' ? 'client' : 'table';
      function sumBy(orders: Order[], key: keyof Order): Order[] {
        const result: Order[] = [];
        orders.forEach((order) => {
          const orderWithSameKey = result.find(o => o[key] === order[key]);
          if (orderWithSameKey) {
            orderWithSameKey.total += order.total;
          } else {
            result.push({ ...order, total: order.total });
          }
        });
        return result;
      }
      const result = sumBy(Object.values(orders).flat(), groupKey);
      setFilteredOrders(result);
    }
    if (filter == 'all') {
      setFilteredOrders(orders);
    }
  }, [filter, orders]);

  const totalCountClients = groupAndCountClients(orders);
  const totalRevenue = orders.reduce(function (accumulator, object) {
    return accumulator + object.total;
  }, 0);


  function handleConfirmPaymentTable(order: Order, filterPayment: string) {
    setIsVisiblePayment(true);
    setSelectedOrder(order);
    setFilterPayment(filterPayment);
  }

  function handleConfirmPaymentClient(order: Order, filterPayment: string) {
    setIsVisiblePayment(true);
    setSelectedOrder(order);
    setFilterPayment(filterPayment);
  }

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {!isLoading && (
        <>
          <Modal visible={isVisiblePayement} onClose={() => setIsVisiblePayment(false)} title="Efetuar pagamento" >
            <ConfirmPayment order={selectedOrder} filterPayment={filterPayment} />
          </Modal>
          <CardContainer>
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
              <h1>{totalCountClients.length}</h1>
            </Cards>
            <Cards>
              <div className="headerCard">
                <span className="icon-avenue"><CurrencyDollar size={24} /></span>
                <span>Faturamento</span>
              </div>
              <h1>{formatCurrency(totalRevenue)}</h1>
            </Cards>
            <Cards>
              <div className="headerCard">
                <span className="icon-customers"><Wallet size={24} /></span>
                <span>Receita</span>
              </div>
              <h1>{totalCountClients.length}</h1>
            </Cards>
          </CardContainer>

          <ListOrders>

            <HeaderListOrders>
              <strong>Relatorio de Pedidos</strong>

              <FilterOrders>
                <span>Filtrar</span>
                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value='all'>Todos</option>
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
                        <td id="clientContainer">
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
                        <td className="status-container">
                          {filter === null && (
                            <StatusOrder status={order.status}>
                              {order.status === "WAITING" && "🕑"}
                              {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                              {order.status === "DONE" && "✅"}
                              <span>{order.status === "WAITING" && "  Fila de espera"}
                                {order.status === "IN_PRODUCTION" && "Em produção"}
                                {order.status === "DONE" && "Pronto"}</span>
                            </StatusOrder>
                          )}
                          {filter === 'all' && (
                            <StatusOrder status={order.status}>
                              {order.status === "WAITING" && "🕑"}
                              {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                              {order.status === "DONE" && "✅"}
                              <span>{order.status === "WAITING" && "  Fila de espera"}
                                {order.status === "IN_PRODUCTION" && "Em produção"}
                                {order.status === "DONE" && "Pronto"}</span>
                            </StatusOrder>
                          )}

                          {filter === 'client' && (
                            <ActionFilterContainer>
                              <Link to={`/orders/${order.client}`}>
                                <NotePencil size={24} />
                              </Link>
                              <ButtonPayment onClick={() => handleConfirmPaymentClient(order, order.client)}>
                                <Wallet size={24} />
                              </ButtonPayment>
                            </ActionFilterContainer>
                          )}

                          {filter === 'table' && (
                            <ActionFilterContainer>
                              <Link to={`/orders/${order.table}`}>
                                <NotePencil size={24} />
                              </Link>
                              <ButtonPayment onClick={() => handleConfirmPaymentTable(order, order.table)}>
                                <Wallet size={24} />
                              </ButtonPayment>
                            </ActionFilterContainer>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableOrders>
            {filteredOrders.length > 0 && (
              <Pagination />
            )}
          </ListOrders>
        </>
      )}
    </>
  );
}
