import styled from "styled-components";

export const BottomBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  min-height: 80px;
  padding: 16px;

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

export const BottomBarContentButtons = styled.div`
   display: flex;
   flex: 1;
   justify-content: space-between;
   padding: 0 16px;

   button{
    padding: 8px;
    position: relative;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.colors.buttonSecondary};

    span{
      position: absolute;
      top: 2px;
      right: 0;
      background-color: white;
      border-radius: 50%;
      width: 16px;
      font-size: 13px;
    }
   }
`;
