import { useEffect } from "react";
import { toast } from "react-toastify";
import { CartItem } from "../../../types/CartItem";
import { ProductType } from "../../../types/Products";
import { api } from "../../../utils/api";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  OverlayCartModal,
  FormCategory,
  FooterCart,
  HeaderModalCart,
} from "./styles";

interface CartModalProps {
  visible: boolean;
  onClose: () => void;

}

export function FormCategoryModal({
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
    <OverlayCartModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>Nova categoria</strong>

          <button type="button" onClick={onClose}>
            X
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormCategory>
            <div className="input-container">
              <span>Icone</span>
              <input placeholder="Insira um icone" />
            </div>

            <div className="input-container">
              <span>Nome</span>
              <input placeholder="Digite um nome" />
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
    </OverlayCartModal>
  );
}
