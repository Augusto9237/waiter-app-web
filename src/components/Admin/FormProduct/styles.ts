import styled from "styled-components";


export const FormProductContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
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
      color: ${(props) => props.theme.colors.text};
      margin-top: 8px;
    }
  }
`;

export const FormProductContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding-bottom: 100px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    input {
      border: 1px solid ${(props) => props.theme.colors.border};
      border-radius: 8px;
      padding: 8px;
      color: ${(props) => props.theme.colors.text};
    }

    .input-container-ingredientsUpdate {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;

      input {
        margin-left:-8px;
      }

      input.icon-ingredient {
        width: 20%;
      }

      button {
        opacity: 0.5;
      }
    }

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
      
      input {
        margin-left:-8px;
      }
      input.icon-ingredient {
        width: 20%;
      }
    }

    .button-ingredients-container {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      color: ${(props) => props.theme.colors.text};
    }

    input {
      width: 100%;
      background: ${(props) => props.theme.colors.secondary};
      border: 1px solid rgba(204, 204, 204, 0.5);
      border-radius: 8px;
      padding: 16px;
    }

    select {
      width: 100%;
      background: ${(props) => props.theme.colors.secondary};
      border: 1px solid rgba(204, 204, 204, 0.5);
      border-radius: 8px;
      padding: 16px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const FooterFormProduct = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
