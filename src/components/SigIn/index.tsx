import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { Container, SigInBody, ImageContainer, SigInContent, SigInHeader, SigInInputContainer } from './styles';

export default function SigIn() {
  return (
    <Container>
      <SigInBody>
        <ImageContainer>
          <img src={logo} />
        </ImageContainer>
        <SigInContent>
          <SigInHeader>
            <h1>Acessar sua conta</h1>
          </SigInHeader>
          <SigInInputContainer>
            <span>E-mail</span>
            <input placeholder="Digite seu e-mail" />

            <span>Senha</span>
            <input placeholder="Digite sua senha" />
          </SigInInputContainer>
          <Button onClick={() => alert('entrar')}>Entrar</Button>
        </SigInContent>
      </SigInBody>
    </Container>
  );
}