import logo from "../../assets/images/logo.svg";
import { ButtonTheme } from "../ButtonTheme";
import { Container, Content } from "./styles";

interface HeaderProps {
  title: string;
  subtitle: string;
  //handleDarkMode: () => void;
}

export function Header({ title, subtitle, }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <img src={logo} alt="waiterapp" />
      </Content>
      <ButtonTheme/>
    </Container>
  );
}
