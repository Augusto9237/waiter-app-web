import styled from "styled-components";

export const ContainerButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.supportingColors.secondary};
  color: ${(props) => props.theme.supportingColors.textSecondary};
  padding: 2px;
  border-radius: 4px;
`;
