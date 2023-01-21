import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;

  @media (max-width: 1220px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 500px) {
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
      width: 190px;
    }
  }
`;

export const ToggleTheme = styled.button`
  position: absolute;
  right: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 500px) {
    right: 0.2rem;
  }
`;
