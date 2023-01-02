import styled from "styled-components";

export const OverlayFormProductModal = styled.div`
  z-index: 50;
  flex: 1;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  @media (max-width: 415px) {
    padding: 2%;
    overflow-y: auto;
  }
`;

export const ModalBodyCart = styled.div`
  position: relative;
  background: #fff;
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
`;

export const HeaderModalCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  strong {
    font-size: 24px;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin: 8px;
  }
`;

export const ButtonCloseModal = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 24px;
`;

export const ModalContent = styled.div`
  background: #fafafa;
  width: 100%;
  padding: 24px;

  header {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      color: #666;
      margin-top: 8px;
    }
  }
`;

export const FormProduct = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .button-ingredients {
      border: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #333333;
      border-radius: 18px;
      color: #ffffff;
    }

    .input-container-ingredients {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;

      div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      input {
        background: #ffffff;
        border: 1px solid rgba(204, 204, 204, 0.5);
        border-radius: 8px;
        padding: 8px;
        margin-left: -8px;
      }

      input.icon-ingredient {
        width: 20%;
      }
    }

    .button-ingredients-container {
      display: flex;
      justify-content: flex-start;
      width: 100%;

      button {
        opacity: 0.5;
      }
      button:hover {
        opacity: 1;
      }
    }

    span {
      font-weight: 600;
      font-size: 16px;
      color: #333333;
    }

    input {
      width: 100%;
      background: #ffffff;
      border: 1px solid rgba(204, 204, 204, 0.5);
      border-radius: 8px;
      padding: 16px;
    }

    select {
      width: 100%;
      background: #ffffff;
      border: 1px solid rgba(204, 204, 204, 0.5);
      border-radius: 8px;
      padding: 16px;
    }
  }
`;

export const FooterFormProduct = styled.div`
  display: flex;
  background: #fff;
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
