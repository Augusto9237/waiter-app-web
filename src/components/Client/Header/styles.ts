import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 198px;
  align-items: center;

  @media (max-width: 1220px) {
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
    height: 124px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    background: transparent;
    border-radius: 48px;
    border: none;

    span {
      color: ${(props) => props.theme.colors.buttonSecondary};
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

export const ContentHeaderClient = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 4px;

    @media (max-width: 415px) {
      font-size: 24px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    line-height: 80%;
    opacity: 0.9;
    margin-bottom: 8px;

    @media (max-width: 415px) {
      font-size: 24px;
      font-size: 14px;
    }
  }
`;

export const LabelTable = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 15px 16px;
  margin-top: 16px;

  @media (max-width: 415px) {
    padding: 6px 8px;
    margin-top: 4px;
  }
`;
