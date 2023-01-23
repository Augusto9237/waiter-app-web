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
import { CategoryType } from "../../../types/Category";

interface CartModalProps {
  category?: CategoryType | null;
  visible: boolean;
  onClose: () => void;

}

export function FormCategoryModal({
  visible,
  onClose,
  category,
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
    if (category) {
      setIcon(category.icon);
      setName(category.name);
    }

  }, [category]);


  async function handleOk() {

    const route = category?._id ? `/categories/${category._id}` : '/categories';
    const path = category?._id ? api.patch : api.post;

    const message = category?._id ? 'Categoria atualizada com sucesso!' : 'Categoria criada com sucesso!';


    await path(route, {
      icon: icon,
      name: name,
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
          <strong>{category?._id ? 'Editar categoria' : 'Nova categoria'}</strong>

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
