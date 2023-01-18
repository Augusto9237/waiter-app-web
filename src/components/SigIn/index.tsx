import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { Container, SigInBody, ImageContainer, SigInContent, SigInHeader, SigInInputContainer, FooterSigIn} from './styles';

export default function SigIn() {
  const navigate = useNavigate();

  return (
    <Container>
      <SigInBody>
        <ImageContainer>
          <img src={logo} />
        </ImageContainer>
        <SigInContent>
          <SigInHeader>
            <img src={logo} />
            <h1>Acessar sua conta</h1>
          </SigInHeader>
          <SigInInputContainer>
            <span>Nome</span>
            <input placeholder="Digite seu nome" />

            <span>Senha</span>
            <input placeholder="Digite sua senha" type='password' />
          </SigInInputContainer>
          <FooterSigIn>
            <Button onClick={() => navigate('/admin')}>Entrar</Button>
          </FooterSigIn>
        </SigInContent>
      </SigInBody>
    </Container>
  );
}