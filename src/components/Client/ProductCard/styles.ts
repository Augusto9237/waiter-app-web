import styled from "styled-components";

export const ProductCardContainer = styled.div`
  border: none;
  background: none;
  position: relative;
  display: flex;
  height: 98px;
  padding: 12px 0px;
  align-items: center;

  :hover {
    background: #fff;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  @media (max-width: 450px) {
    padding: 12px 0px;
    :hover {
      background: none;
      box-shadow: none;
    }
  }
`;

export const ProductImage = styled.button`
  width: 120px;
  height: 96px;
  overflow: hidden;
  border: none;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  margin-left: 12px;
  margin-right: 12px;

  span {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 450px) {
    max-width: 199px;
  }
`;

export const ButtonAddProduct = styled.button`
  background: transparent;
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #d73035;
  color: #d73035;
`;

export const Separator = styled.div`
  @media (max-width: 600px) {
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 22px 0;
  }
`;
