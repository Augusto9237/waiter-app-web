import logo from "../../../assets/images/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>{title}</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="waiterapp" />
      </Content>
    </Container>
  );
}
