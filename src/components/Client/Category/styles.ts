import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;

  strong {
    color: ${(props) => props.theme.colors.text};
  }
  
`;

export const Icon = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
`;
