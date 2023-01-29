import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import { Container, SigInBody, ImageContainer, SigInContent, SigInHeader, SigInInputContainer, FooterSigIn } from './styles';
import { useContext, useState } from "react";
import { AuthContext, UserDecode } from "../../context/AuthContext";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export default function SigIn() {
  const auth = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      if (name && password) {
        const isLogged = await auth.signin(name, password);
        const decode = await jwtDecode<UserDecode>(isLogged.token);

        if (isLogged) {
          if (decode.of === 'MANANGER') {
            navigate('/');
          } else {
            navigate('/pedidos');
          }
          toast.success(isLogged.msg);
        }
      }
    } catch (error) {
      toast.error("Erro ao fazer login, verifique seus dados e tente novamente.");
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
              required
            />

            <span>Senha</span>
            <input
              placeholder="Digite sua senha"
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </SigInInputContainer>
          <FooterSigIn>
            <Button onClick={handleLogin} title="Entrar"/>
          </FooterSigIn>
        </SigInContent>
      </SigInBody>
    </Container>
  );
}