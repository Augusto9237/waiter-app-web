import { useState } from "react";
import { categories } from "../../../mocks/categories";
import { Category } from "../Category";
import { ButtonCategory, CategoriesContainer } from "./styles";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId;
    setSelectedCategory(category);
  }

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        const isSelected = selectedCategory === category._id;

        return (
          <ButtonCategory
            key={category._id}
            onClick={() => handleSelectCategory(category._id)}
            value={isSelected ? 1 : 0.5}
          >
            <Category name={category.name} icon={category.icon} />
          </ButtonCategory>
        );
      })}
    </CategoriesContainer>
  );
}
