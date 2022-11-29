import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 415px) {
    justify-content: space-between;
    padding: 12px 8px;
    overflow-x: scroll;
  }
  @media (min-width: 415px) {
    justify-content: center;
  }
`;

export const ButtonCategory = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  opacity: ${(props) => props.value};
`;
