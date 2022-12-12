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

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 30px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
  }
`;

export const SigInBody = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  max-width: 1060px;
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
  padding: 42px;

  img {
    width: 100%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SigInContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  padding: 32px;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const SigInHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    background: #d73035;
    padding: 18px;
    gap: 12px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    color: #333333;

    @media (max-width: 700px) {
      color: #ffffff;
    }
  }

  img {
    display: none;

    @media (max-width: 700px) {
      display: flex;
      width: 300px;
    }
  }
`;

export const SigInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  span {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
    color: #333333;
    opacity: 0.9;

    @media (max-width: 700px) {
      margin-left: 24px;
    }
  }

  input {
    padding: 12px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    margin-bottom: 12px;

    @media (max-width: 700px) {
      margin: 0 24px;
      margin-bottom: 12px;
    }
  }
`;

export const FooterSigIn = styled.footer`
   width: 100%;
   display: flex;

   @media (max-width: 700px) {
     padding: 0 24px;
     margin-bottom: 24px;
    }
`;
