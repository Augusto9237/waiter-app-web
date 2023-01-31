
import { UserType } from "../../../types/Users";
import { Container, Content, ContentHeaderClient, LabelTable } from "./styles";

interface HeaderProps {
  selectedClient: string;
  selectedTable: string;
  onCancelOrder: () => void;
  clerkInfo: UserType[];
}

export function HeaderClient({ selectedTable, selectedClient, onCancelOrder, clerkInfo }: HeaderProps) {
  return (
    <Container>
      <Content>

        <ContentHeaderClient>
          <h1>Pedido</h1>
          <span>Mesa: {selectedTable}</span>
          <span>Atendente: {clerkInfo[0].name}</span>
        </ContentHeaderClient>

        <button onClick={onCancelOrder}>
          <span>cancelar pedido</span>
        </button>

      </Content>
      <LabelTable>
        Cliente: {selectedClient}
      </LabelTable>
    </Container>
  );
}
