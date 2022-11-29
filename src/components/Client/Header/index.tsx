import logo from "../../../assets/images/logo.svg";
import { Container, Content, ContentHeaderClient } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function HeaderClient({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="page-details">
          {!selectedTable && (
            <>
              <span>Bem-vindo(a) ao</span>
              <h1>REST</h1>
            </>
          )}
          {selectedTable && (
            <ContentHeaderClient>
              <h1>Pedido</h1>
              <span>Mesa: {selectedTable}</span>
              <span>Atendente:</span>
            </ContentHeaderClient>
          )}
        </div>
        {!selectedTable && <img src={logo} alt="waiterapp" />}
        {selectedTable && (
          <button onClick={onCancelOrder}>
            <span>cancelar pedido</span>
          </button>
        )}
      </Content>
    </Container>
  );
}
