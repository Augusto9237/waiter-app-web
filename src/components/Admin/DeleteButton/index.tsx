import { Trash } from "phosphor-react";
import { ContainerButton } from "./styles";

interface ButtonProps {
  onClick?: () => void; 
}

export function DeleteButton({  onClick,}: ButtonProps) {
  return (
    <ContainerButton onClick={onClick} type='submit'>
       <Trash size={20} />
    </ContainerButton>
  );
}