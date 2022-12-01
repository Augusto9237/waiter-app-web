import React from "react";

import { ContainerButton } from "./styles";

interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <ContainerButton onClick={onClick} disabled={disabled}>
      <span >
        {children}
      </span>
    </ContainerButton>
  );
}