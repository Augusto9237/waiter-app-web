import { formatCurrency } from "../../utils/formatCurrency";
import {
  CardContainer,
  CardOrders,
  Container,
  IconClient,
  ListOrders,
  StatusOrder,
  TableOrders,
} from "./styles";

export default function Admin() {
  return (
    <Container>
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
              <tr>
                <td>
                  <div className="client-info">
                    <IconClient>🙎‍♂️</IconClient>
                    <span>Client Name</span>
                  </div>
                </td>
                <td>coca ks</td>
                <td>{formatCurrency(100)}</td>
                <td>Fulano</td>
                <td><StatusOrder>🕑 Fila de espera</StatusOrder></td>
              </tr>
            </tbody>
          </table>
        </TableOrders>
      </ListOrders>
    </Container>
  );
}
