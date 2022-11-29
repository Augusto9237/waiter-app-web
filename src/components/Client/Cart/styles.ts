import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #ffffff;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;

  .Cart-total {
    flex: 1;
    font-weight: 400;
    font-size: 16px;
    color: #666666;

    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      color: #333333;
    }
  }

  button {
    flex: 1;
    border: none;
    background: #d73035;
    color: #ffffff;
    padding: 14px 24px;
    border-radius: 48px;
  }
`;
