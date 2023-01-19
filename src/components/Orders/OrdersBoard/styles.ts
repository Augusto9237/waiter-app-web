import styled from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;

  button {
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.border};
    height: 84px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme.colors.text};
    }

    span {
    }

    & + button {
      margin-top: 24px;
    }

    @media (max-width: 415px) {
      height: 100px;
    }
  }
`;
