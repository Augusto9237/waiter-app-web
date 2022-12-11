import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  flex: 1;
  max-width: 1216px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
  }
`;

export const SigInBody = styled.div`
  display: flex;
  width: 1060px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  background: #d73035;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;

  img {
    width: 100%;
  }
`;

export const SigInContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  padding: 24px;
`;

export const SigInHeader = styled.header`
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 600;
    font-size: 24px;
    color: #333333;
  }
`;

export const SigInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;

  input {
    padding: 12px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 5.91319px;
  }
`;
