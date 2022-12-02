
import { Container, Content, ContentHeaderClient, LabelTable } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function HeaderClient({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      <Content>

        <ContentHeaderClient>
          <h1>Pedido</h1>
          <span>Mesa: {selectedTable}</span>
          <span>Atendente:</span>
        </ContentHeaderClient>

        <button onClick={onCancelOrder}>
          <span>cancelar pedido</span>
        </button>

      </Content>
      <LabelTable>
        Cliente:
      </LabelTable>
    </Container>
  );
}
