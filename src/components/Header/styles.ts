import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;

  @media (max-width: 1340px) {
    padding: 0 3rem;
  }

  @media (max-width: 1100px) {
    padding: 0 2.5rem;
  }

  @media (max-width: 500px) {
    height: 120px;
    padding: 0 1.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
      padding-right: 4px;
    }

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;

      @media (max-width: 500px) {
        font-size: 18px;
      }
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  img {
    width: 220px;
  }

  img {
    @media (max-width: 500px) {
      width: 185px;
    }
  }
`;

