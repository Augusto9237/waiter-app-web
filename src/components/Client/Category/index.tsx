import { CategoryContainer, Icon } from "./styles";

interface CategoryProps {
  name: string;
  icon: string;
}

export function Category({ name, icon }: CategoryProps) {
  return (
    <CategoryContainer>
      <Icon>
        <span>{icon}</span>
      </Icon>
      <strong>{name}</strong>
    </CategoryContainer>
  );
}
