

import { X } from "phosphor-react";
import {
  ModalContent,
  FooterModal,
  OverlayFormModal,
  ModalBody,
  HeaderModal,
} from "./styles";
import { ReactNode } from "react";

interface CartModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  button: JSX.Element;
}

export function Modal({
  visible,
  onClose,
  title,
  children,
  button
}: CartModalProps) {
  if (!visible) {
    return null;
  }



  return (
    <OverlayFormModal >
      <ModalBody>
        <HeaderModal>
          <div />
          <strong>{title}</strong>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </HeaderModal>

        <ModalContent>
          {children}
        </ModalContent>

        <FooterModal>
          {button}
        </FooterModal>
      </ModalBody>
    </OverlayFormModal>
  );
}
