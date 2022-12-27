import { useEffect, useState } from "react";
import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  FormCategory,
  FooterFormCategory,
  HeaderModalCart,
  OverlayFormModal,
} from "./styles";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { X } from "phosphor-react";

interface CartModalProps {
  categoryId?: string;
  visible: boolean;
  onClose: () => void;

}

export function FormCategoryModal({
  visible,
  onClose,
  categoryId,
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

  useEffect(() => {
    if (categoryId) {
      api.get(`/categories/${categoryId}`)
        .then((Response) => {
          setIcon(Response.data.icon);
          setName(Response.data.name);
        });
    }

  }, [categoryId]);


  async function handleOk() {

    const route = categoryId ? `/categories/${categoryId}` : '/categories';
    const path = categoryId ? api.patch : api.post;

    const message = categoryId ? 'Categoria atualizada com sucesso!' : 'Categoria criada com sucesso!';


    await path(route, {
      icon: icon,
      name: name,
    });
    toast.success(message);
    onClose();
  }


  return (
    <OverlayFormModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>Nova categoria</strong>

          <button type="button" onClick={onClose}>
            <X size={20} />
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
          </FormCategory>
        </ModalContent>

        <FooterFormCategory>

          <Button
            onClick={handleOk}
          >
            Salvar
          </Button>
        </FooterFormCategory>
      </ModalBodyCart>
    </OverlayFormModal>
  );
}
