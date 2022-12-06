import { CardContainer, CardOrders, Container } from "./styles";

export default function Admin() {
  return (
    <Container>
      <CardContainer>
        <CardOrders>
          <span>💲 Receita</span>
        </CardOrders>
        <CardOrders>
          <span>🧾 Pedidos</span>
        </CardOrders>
        <CardOrders>
          <span>🙍‍♂️ Clientes</span>
        </CardOrders>
      </CardContainer>
    </Container>
  );
}
