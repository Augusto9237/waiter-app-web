import styled from "styled-components";

export const CartContent = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  padding: 24px;
`;

export const Item = styled.div`
  display: flex;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageItem = styled.div`
  width: 48px;
  height: 40px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuantityContainer = styled.div`
  min-width: 20px;
  margin-left: 12px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    background: transparent;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 2px solid #d73035;
    color: #d73035;
  }
`;

export const FooterCart = styled.div`
  display: flex;
  min-height: 110px;
  background: ${(props) => props.theme.colors.primary};
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const PriceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  strong {
    font-weight: 600;
    font-size: 20px;
  }
`;
