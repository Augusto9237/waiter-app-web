import { categories } from "../../mocks/categories";
import { Category } from "../Client/Category";
import { MenuContainer, MenuButtons, ButtonCategories, ButtonProducts, ListCategories, ItemCategory } from "./styles";

export function Menu() {
    return (
        <MenuContainer>
            <MenuButtons>
                <strong>Categorias</strong>
                <ButtonCategories>
                    ➕ Categoria
                </ButtonCategories>
            </MenuButtons>
            <ListCategories>
                {categories.map((category) => {
                    return (
                        <>
                            <ItemCategory key={category._id}>
                                <Category icon={category.icon} name={category.name} />
                                <div className="edit-category">
                                    <button>🖍</button>
                                    <button>🗑</button>
                                </div>
                            </ItemCategory>
                        </>
                    );
                })}
            </ListCategories>
        </MenuContainer>
    )
};