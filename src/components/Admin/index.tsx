import { formatCurrency } from "../../utils/formatCurrency";
import {
  CardContainer,
  CardOrders,
  Container,
  ListOrders,
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
          <span className="icon-customers">🙍‍♂️</span>
          <span>Clientes</span>
          <h1>8</h1>
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The table body</td>
                <td>The table body</td>
                <td>The table body</td>
                <td>The table body</td>
              </tr>
            </tbody>
          </table>
        </TableOrders>
      </ListOrders>
    </Container>
  );
}
