import { useEffect, useState } from "react";
import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  FormUser,
  FooterCart,
  HeaderModalCart,
  OverlayFormModal,
} from "./styles";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { X } from "phosphor-react";
import { UserType } from "../../../types/Users";

interface CartModalProps {
  selectedUser?: UserType | null;
  visible: boolean;
  onClose: () => void;

}

export function FormUserModal({
  visible,
  onClose,
  selectedUser
}: CartModalProps) {

  if (!visible) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();

      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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
    <OverlayFormModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>Novo usuario</strong>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormUser>
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
          </FormUser>
        </ModalContent>

        <FooterCart>

          <Button
            onClick={handleOk}
          >
            Salvar
          </Button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayFormModal >
  );
}
