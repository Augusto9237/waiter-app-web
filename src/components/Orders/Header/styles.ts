import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
    height: 120px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;

      @media (max-width: 415px) {
        font-size: 18px;
      }
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;

      @media (max-width: 415px) {
        font-size: 12px;
      }
    }
  }

  img {
    @media (max-width: 415px) {
      width: 190px;
    }
  }
`;
