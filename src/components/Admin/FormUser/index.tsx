import { useEffect, useState } from "react";
import { Button } from "../../Button";

import {
  FormContainer,
  FormContent,
  FooterForm,
} from "./styles";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { UserType } from "../../../types/Users";

interface CartModalProps {
  selectedUser?: UserType | null;
  onClose: () => void;
}

export function FormUser({
  onClose,
  selectedUser
}: CartModalProps) {

  const [userOffice, setUserOffice] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const options = ['MANANGER', 'CLERK', 'KITCHEN_ASSISTANT'];

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setPassword(selectedUser.password);
      setUserOffice(selectedUser.office);
    }

  }, [selectedUser]);


  async function handleOk() {
    const route = selectedUser?._id ? `/users/${selectedUser._id}` : '/users';
    const path = selectedUser?._id ? api.patch : api.post;


    await path(route, {
      name: name,
      password: password,
      office: userOffice
    })
      .then(Response => {
        toast.success(Response.data.msg);
      })
      .catch(error => {
        toast.error(error.response.data.msg);
      });
    onClose();
  }


  return (

    <>
      <FormContainer>
        <FormContent>
          <div className="input-container">
            <span>Cargo</span>
            <select name="office" id="office" value={userOffice} onChange={(e) => setUserOffice(e.target.value)}>
              <option value=''>Selecione o cargo do usuario</option>
              {options.map(option => (
                <option key={option} value={option}>
                  {option === 'CLERK' && "Atendente"}
                  {option === 'KITCHEN_ASSISTANT' && "Aux. de Cozinha"}
                  {option === 'MANANGER' && "Gerente"}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container">
            <span>Nome</span>
            <input
              placeholder="Digite um nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <span>Password</span>
            <input
              placeholder="Digite sua senha"
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormContent>
      </FormContainer>

      <FooterForm>

        <Button
          onClick={handleOk}
          title="Salvar"
        />

      </FooterForm>
    </>
  );
}
