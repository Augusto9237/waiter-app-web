import { useEffect, useState } from "react";


import {
  ButtonCloseModal,
  Footer,
  FormModal,
  ModalTableBody,
  ModalContent,
  OverlayModal,
} from "./styles";

interface TableModalProps {
  visibleModalTable: boolean;
  onCloseModalTable: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visibleModalTable, onCloseModalTable, onSave }: TableModalProps) {


  if (!visibleModalTable) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCloseModalTable();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModalTable]);


  const [table, setTable] = useState("");
  
  function handleSave() {
    onSave(table);
    setTable('');
    onCloseModalTable();
  }

  return (
    <OverlayModal>
      <ModalTableBody>

        <ButtonCloseModal onClick={onCloseModalTable}>X</ButtonCloseModal>

        <ModalContent>
          <FormModal>
            <input
              required
              placeholder="Numero da mesa"
              type='text'
              value={table}
              onChange={(e) => setTable(e.target.value)}
            />
          </FormModal>
        </ModalContent>
        <Footer>
          <button onClick={handleSave}>Salvar</button>
        </Footer>
      </ModalTableBody>
    </OverlayModal>
  );
}
