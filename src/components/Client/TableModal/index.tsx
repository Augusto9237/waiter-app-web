import { useEffect, useState } from "react";


import {
  ButtonCloseModal,
  Footer,
  ModalBody,
  ModalContent,
  Overlay,
} from "./styles";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

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



  function handleSave() {
    onSave(table);
    setTable('');
    onClose();
  }


  return (
    <Overlay>
      <ModalBody>

        <ButtonCloseModal onClick={onClose}>X</ButtonCloseModal>

        <ModalContent>
          <input
            placeholder="Numero da mesa"
            type='text'


            value={table}
            onChange={(e) => setTable(e.target.value)}
          />
        </ModalContent>
        <Footer>
          <button onClick={handleSave}></button>
        </Footer>
      </ModalBody>
    </Overlay>
  );
}
