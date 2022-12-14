import { useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  OverlayFormProductModal,
  FormCategory,
  FooterCart,
  HeaderModalCart,
} from "./styles";

interface CartModalProps {
  visible: boolean;
  onClose: () => void;
}

export function FormProductModal({
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
            X
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormCategory>
          <div className="input-container">
              <span>Categoria</span>
              <input placeholder="Digite um nome" type='text' />
            </div>

            <div className="input-container">
              <span>Nome</span>
              <input placeholder="Digite um nome" type='text' />
            </div>

            <div className="input-container">
              <span>Preço</span>
              <input placeholder="Digite o preço" type='number' />
            </div>

            <div className="input-container">
              <span>Descrição</span>
              <input placeholder="Digite um nome" />
            </div>

            <div className="input-container">
              <span>Ingredientes</span>
              <input placeholder="Digite um nome" />
            </div>

            <div className="input-container">
              <span>Imagem</span>
              <input placeholder="Digite um nome" type='file'/>
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
    </OverlayFormProductModal>
  );
}
