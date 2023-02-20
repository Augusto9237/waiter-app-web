import React, { ReactNode } from "react";

import { ContainerButton } from "./styles";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  px?: string;
}

export function Button({ title, children, onClick, disabled, px }: ButtonProps) {
  return (
    <ContainerButton onClick={onClick} disabled={disabled} type='submit' style={{ padding: (px? `${px}` : '12px') }}>
      {children}
      <span >
        {title}
      </span>
    </ContainerButton>
  );
}