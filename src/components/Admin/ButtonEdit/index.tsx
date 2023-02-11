import { PencilSimple } from "phosphor-react";
import React, { ReactNode } from "react";

import { ContainerButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode; 
}

export function ButtonEdit({  onClick, children }: ButtonProps) {
  return (
    <ContainerButton onClick={onClick} type='submit'>
      <PencilSimple size={20} />
    </ContainerButton>
  );
}