import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  min-height: 80px;
  padding: 22px;

  @media (max-height: 415px) {
    height: 80px;
    min-height: 80px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;
`;

export const CartTotal = styled.div`
  flex: 1;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: ${(props) => props.theme.colors.text};
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`;
