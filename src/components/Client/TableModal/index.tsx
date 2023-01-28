import { useContext, useEffect, useState } from "react";
import { Button } from "../../Button";


import {
  Footer,
  FormModal,
  ModalTableBody,
  OverlayModal,
} from "./styles";
import { AuthContext } from "../../../context/AuthContext";

interface TableModalProps {
  visibleModalTable: boolean;
  onCloseModalTable: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visibleModalTable, onCloseModalTable, onSave }: TableModalProps) {
  const { users } = useContext(AuthContext);

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

  const clerks = users.filter((user) => user.office === "CLERK");

  const handleSave = () => {
    onSave(table);
    setTable("");
    onCloseModalTable();
  };
  return (
    <OverlayModal>
      <ModalTableBody>
        <header>
          <strong>Iniciar Pedido</strong>
          <button onClick={onCloseModalTable}>X</button>
        </header>

        <FormModal>
          <div className="input-container">
            <select name="category" >
              <option value=''>Selecione um atendente</option>
              {clerks.map((clerk) => {
                return (
                  <option key={clerk._id} value={clerk._id}>{clerk.name}</option>
                );
              })}
            </select>
          </div>

          <input
            required
            placeholder="Informe o seu nome"
            type='text'
            value={table}
            onChange={(e) => setTable(e.target.value)}
          />
        </FormModal>

        <Footer>
          <Button onClick={handleSave}>Salvar</Button>
        </Footer>
      </ModalTableBody>
    </OverlayModal>
  );
}
