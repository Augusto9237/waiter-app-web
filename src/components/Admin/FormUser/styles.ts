import styled from "styled-components";


export const FormContainer = styled.div`
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

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

  
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
      color: ${(props) => props.theme.colors.text};
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


export const FooterForm = styled.div`
  display: flex;
  min-height: 110px;
  background: ${(props) => props.theme.colors.primary};
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

