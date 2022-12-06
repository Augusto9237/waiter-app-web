import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
    margin: 20px auto;
  }
  @media (max-height: 415px) {
    margin-bottom: 120px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

export const CardOrders = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  background: #fff;
  flex: 1;

  .icon-avenue {
    padding: 8px;
    background: rgba(136, 224, 145, 0.24);
    border-radius: 8px;
    margin-right: 12px;
  }

  .icon-orders {
    padding: 8px;
    background: rgba(255, 181, 114, 0.2);
    border-radius: 8px;
    margin-right: 12px;
  }

  .icon-customers {
    padding: 8px;
    background: rgba(0, 209, 255, 0.25);
    border-radius: 8px;
    margin-right: 12px;
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
    color: #333333;
    margin-top: 8px;
  }
`;
