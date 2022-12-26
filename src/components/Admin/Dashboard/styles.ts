import styled from "styled-components";

interface adminProps {
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
}

export const LoadingContainer = styled.div`
  display: flex;
  height: 98vh;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 850px) {
    gap: 16px;
  }

  @media (max-width: 450px) {
    gap: 8px;
  }
`;

export const CardOrders = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  background: #fff;
  flex: 1;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }

  .headerCard {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .icon-avenue {
    display: flex;
    max-width: 40px;
    align-items: center;
    padding: 8px;
    background: rgba(136, 224, 145, 0.24);
    max-width: 40px;
    border-radius: 8px;
    margin-right: 12px;

    @media (max-width: 850px) {
      margin-right: 0;
    }
  }

  .icon-orders {
    display: flex;
    max-width: 40px;
    align-items: center;
    padding: 8px;
    background: rgba(255, 181, 114, 0.2);
    border-radius: 8px;
    margin-right: 12px;

    @media (max-width: 850px) {
      margin-right: 0;
    }
  }

  .icon-customers {
    display: flex;
    max-width: 40px;
    align-items: center;
    padding: 8px;
    background: rgba(0, 209, 255, 0.25);
    border-radius: 8px;
    margin-right: 12px;

    @media (max-width: 850px) {
      margin-right: 0;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #333333;
    margin-top: 8px;

    @media (max-width: 850px) {
      font-weight: 600;
      line-height: 120%;
    }

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`;

export const ListOrders = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;

  @media (max-width: 850px) {
    padding: 18px;
  }

  @media (max-width: 450px) {
    overflow: hidden;
  }

  strong {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
`;

export const TableOrders = styled.div`
  display: flex;
  flex: 1;
  margin-top: 16px;

  @media (max-width: 550px) {
    overflow: scroll;
  }

  table {
    width: 100%;

    th {
      border-bottom: 1px solid rgba(204, 204, 204, 0.3);
      font-weight: 600;
      font-size: 14px;
      padding-bottom: 8px;

      @media (max-width: 650px) {
        text-align: center;
      }
    }

    td {
      text-align: center;
      padding: 12px;
      font-weight: 400;
      font-size: 14px;

      .client-info {
        display: flex;
        align-items: center;
        max-width: 10rem;
        justify-content: flex-start;
        gap: 16px;
      }

      @media (max-width: 850px) {
        padding: 8px;
      }

      @media (max-width: 450px) {
        padding: 6px;
      }
    }
  }
`;

export const IconClient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 209, 255, 0.25);
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const StatusOrder = styled.div<adminProps>`
  background: ${(props) =>
    (props.status === "WAITING" && "rgba(255, 181, 114, 0.2)") ||
    (props.status === "IN_PRODUCTION" && "rgba(0, 209, 250, 0.15)") ||
    (props.status === "DONE" && "rgba(136, 224, 145, 0.24)")};
  border-radius: 30px;
  padding: 4px 12px;
  max-width: 200px;
  margin: 0 auto;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) =>
      (props.status === "WAITING" && "#FC410C") ||
      (props.status === "IN_PRODUCTION" && " #529FF9") ||
      (props.status === "DONE" && "#00C643")};
  }

  @media (max-width: 650px) {
    span {
      display: none;
    }
  }
`;