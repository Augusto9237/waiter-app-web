import styled from "styled-components";

interface ImageProps {
  image: string;
}

export const OverlayModal = styled.div`
  z-index: 50;
  flex: 1;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 415px) {
    padding: 2%;
    overflow-y: auto;
  }
`;

export const ModalTableBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
  padding: 24px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      font-weight: 600;
      font-size: 16px;
    }

    button{
      border: none;
      background: none;
    }
  }
`;


export const ModalTableContent = styled.div`
  background: #fafafa;
  width: 100%;
  flex: 1;

`;

export const FormModal = styled.form`
 display: flex;
 flex: 1;
 margin: 24px 0;

 input{
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
 }
`;

export const Footer = styled.div`
  display: flex;

  button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    background: #d73035;
    border: none;
    border-radius: 48px;
    color: #ffffff;
  }
`;
