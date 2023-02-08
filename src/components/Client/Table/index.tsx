import { useState } from "react";
import { Button } from "../../Button";

import {
  Footer,
  FormTable,
} from "./styles";

import { UserType } from "../../../types/Users";

interface TableModalProps {


  onSave: (client: string, clerk: string) => void;
  attendants: UserType[];
}

export function Table({ onSave, attendants }: TableModalProps) {

  const [client, setTable] = useState("");
  const [clerkId, setClerkId] = useState("");

  const handleSave = () => {
    onSave(client, clerkId);
    setTable("");
  };
  return (
    <>
      <FormTable>
        <div className="input-container">
          <select name="category" onChange={(e) => setClerkId(e.target.value)} >
            <option value=''>Selecione um atendente</option>
            {attendants.map((clerk) => {
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
      </FormTable>

      <Footer>
        <Button onClick={handleSave} title="Salvar" />
      </Footer>
    </>
  );
}
