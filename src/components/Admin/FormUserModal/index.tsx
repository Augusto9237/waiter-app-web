import { useEffect, useState } from "react";
import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  FormCategory,
  FooterCart,
  HeaderModalCart,
  OverlayFormModal,
} from "./styles";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";

interface CartModalProps {
  visible: boolean;
  onClose: () => void;

}

export function FormUserModal({
  visible,
  onClose,
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

  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  async function handleOk() {
    await api.post('/categories', {
      icon: icon,
      name: name,
      password: password,
    });
    toast.success('Categoria criada com sucesso!');
    onClose();
  }


  return (
    <OverlayFormModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>Novo usuario</strong>

          <button type="button" onClick={onClose}>
            X
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormCategory>
            <div className="input-container">
              <span>Icone</span>
              <input
                placeholder="Insira um icone"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </FormCategory>
        </ModalContent>

        <FooterCart>

          <Button
            onClick={handleOk}
          >
            Salvar
          </Button>
        </FooterCart>
      </ModalBodyCart>
    </OverlayFormModal>
  );
}
