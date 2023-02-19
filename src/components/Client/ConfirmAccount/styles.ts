import styled from "styled-components";

export const ContainerOrderDetail = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 28px;
  border-radius: 8px;

  @media (max-width: 415px) {
    padding: 22px;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-size: 24px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .status-container {
    margin-top: 8px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 24px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        strong {
          display: block;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 14px;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const SubtotalContent = styled.div`
  display: flex;
  gap: 12px;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: ${(props) => props.theme.colors.buttonPrimary};
    border-radius: 48px;
    border: 0;
    color: ${(props) => props.theme.colors.primary};
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .secondary {
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;
