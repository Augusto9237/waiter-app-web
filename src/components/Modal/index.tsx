

import { X } from "phosphor-react";
import {
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
}

export function Modal({
  visible,
  onClose,
  title,
  children,

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
        {children}
      </ModalBody>
    </OverlayFormModal>
  );
}
