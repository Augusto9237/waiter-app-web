import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import sockectIo from "socket.io-client";
import { Order } from "../../types/Order";
import { OrdersBoard } from "./OrdersBoard";
import { Container, LoadingContainer } from "./styles";
import LoadingSpinner from "../LoadingSpinner";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

export function Orders() {
  const { orders, setOrders, isLoading, setIsLoading } = useContext(AuthContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[] | []>([]);
  const { filter } = useParams();
  
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
      setFilteredOrders(
        orders.filter(order => {
          const filterString = filter?.toString();
          return order.client === filterString || order.table === filterString;
        })
      );
    }
  }, [filter, orders]);


  const waiting = filteredOrders.filter((order) => order.status === 'WAITING');
  const inProduction = filteredOrders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = filteredOrders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status }
        : order
    )));
  }

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {!isLoading && (
        <>
          <OrdersBoard icon="🕑" title="Fila de espera" orders={waiting} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} />
          <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={inProduction} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} />
          <OrdersBoard icon="✅" title="Finalizado!" orders={done} onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} />
        </>
      )}
    </Container>
  );
}
