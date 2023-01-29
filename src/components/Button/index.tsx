import React, { ReactNode } from "react";

import { ContainerButton } from "./styles";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

export function Button({ title, children, onClick, disabled }: ButtonProps) {
  return (
    <ContainerButton onClick={onClick} disabled={disabled} type='submit'>
      {children}
      <span >
        {title}
      </span>
    </ContainerButton>
  );
}