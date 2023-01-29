import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
  border: none;
  flex: 1;
  background: ${({ disabled }) => (disabled ? "#999" : "#d73035")};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;

  :hover{
    background: #8A1114;
  }

  span{
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
  }
`;