import { MenuContainer, MenuButtons, ButtonCategories, ButtonProducts } from "./styles";

export function Menu() {
    return (
        <MenuContainer>
            <MenuButtons>
                <ButtonCategories>
                   ➕ Categoria
                </ButtonCategories>

                <ButtonProducts>
                   ➕ Produto
                </ButtonProducts>
            </MenuButtons>
        </MenuContainer>
    )
};