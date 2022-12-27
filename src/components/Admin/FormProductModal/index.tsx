import { FormEvent, InputHTMLAttributes, useEffect } from "react";

import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  OverlayFormProductModal,
  FormCategory,
  FooterFormProduct,
  HeaderModalCart,
} from "./styles";
import { X } from "phosphor-react";
import { CategoryType } from "../../../types/Category";

interface CartModalProps {
  categories: CategoryType[];
  visible: boolean;
  onClose: () => void;
}

export function FormProductModal({
  visible,
  onClose,
  categories
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

  const handleInputChange = (e: FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>  ): void => {
    console.log('change', e.currentTarget.value );
    
  };


  function handleOk() {
    onClose();

  }


  return (
    <OverlayFormProductModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>Novo produto</strong>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormCategory>
            <div className="input-container">
              <span>Categoria</span>
              <select name="category" onChange={handleInputChange}>
                <option value='0'>Selecione uma categoria</option>
                {categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>{category.icon}{" "}{category.name}</option>
                  );
                })}
              </select>
            </div>

            <div className="input-container">
              <span>Nome</span>
              <input placeholder="Digite um nome" type='text' />
            </div>

            <div className="input-container">
              <span>Preço</span>
              <input placeholder="Digite o preço" type='number' onChange={handleInputChange} />
            </div>

            <div className="input-container">
              <span>Descrição</span>
              <input placeholder="Digite a descrição do produto" onChange={handleInputChange} />
            </div>

            <div className="input-container">
              <span>Ingredientes</span>
              <input placeholder="Digite um nome" />
            </div>

            <div className="input-container">
              <span>Imagem</span>
              <input placeholder="Digite um nome" type='file' />
            </div>
          </FormCategory>
        </ModalContent>

        <FooterFormProduct>

          <Button
            onClick={handleOk}
          >
            Salvar
          </Button>
        </FooterFormProduct>
      </ModalBodyCart>
    </OverlayFormProductModal>
  );
}
