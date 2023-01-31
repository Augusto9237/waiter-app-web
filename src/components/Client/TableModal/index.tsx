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
  onSave: (client: string, clerk: string) => void;
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

  const { users } = useContext(AuthContext);

  const [client, setTable] = useState("");
  const [clerkId, setClerkId] = useState("");

  const clerks = users.filter((user) => user.office === "CLERK");

  const handleSave = () => {
    onSave(client, clerkId);
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
            <select name="category" onChange={(e) => setClerkId(e.target.value)} >
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
            value={client}
            onChange={(e) => setTable(e.target.value)}
          />
        </FormModal>

        <Footer>
          <Button onClick={handleSave} title="Salvar"/>
        </Footer>
      </ModalTableBody>
    </OverlayModal>
  );
}
