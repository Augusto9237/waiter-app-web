import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { Container, SigInBody, ImageContainer, SigInContent, SigInHeader, SigInInputContainer, FooterSigIn } from './styles';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SigIn() {
  const auth = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin() {
    if (name && password) {
      const isLogged = await auth.signin(name, password);
      if (isLogged) {
        navigate('/');
      }
    }

  }


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
            <input
              placeholder="Digite seu nome"
              value={name}
              type='text'
              onChange={(e) => setName(e.target.value)}
            />

            <span>Senha</span>
            <input
              placeholder="Digite sua senha"
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />

          </SigInInputContainer>
          <FooterSigIn>
            <Button onClick={handleLogin}>Entrar</Button>
          </FooterSigIn>
        </SigInContent>
      </SigInBody>
    </Container>
  );
}