import { formatCurrency } from "../../utils/formatCurrency";
import { CardContainer, CardOrders, Container } from "./styles";

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
    </Container>
  );
}
