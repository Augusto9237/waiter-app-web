import { useEffect, useState } from "react";

import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { X } from "phosphor-react";

import { Button } from "../../Button";
import { CategoryType } from "../../../types/Category";

import {
  ModalBodyCart,
  ModalContent,
  FormCategory,
  FooterFormCategory,
  HeaderModalCart,
  OverlayFormModal,
} from "./styles";

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

    try {
      const response = await path(route, {
        icon,
        name,
      });
      toast.success(response.data.msg);
    } catch (error : any) {
      toast.error(error.response.data.msg);
    }
    onClose();
  }


  return (
    <OverlayFormModal onClick={onClose}>
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
