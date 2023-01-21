import { Moon, Sun } from "phosphor-react";
import logo from "../../assets/images/logo.svg";
import { useThemeHook } from "../../context/themeHook";
import { Container, Content, ToggleTheme } from "./styles";

interface HeaderProps {
  title: string;
  subtitle: string;
  //handleDarkMode: () => void;
}

export function Header({ title, subtitle, }: HeaderProps) {
  const { isDarkMode, handleDarkMode } = useThemeHook();

  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <img src={logo} alt="waiterapp" />
      </Content>

      <ToggleTheme onClick={handleDarkMode}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </ToggleTheme>
    </Container>
  );
}
