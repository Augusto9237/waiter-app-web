import styled from "styled-components";

export const ButtonCloseModal = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  color: #fff;
  
  border-radius: 16px;
  margin: 24px;
  
`;

export const ContentForm = styled.div`
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

export const FormCategoryContainer = styled.form`
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
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 8px;
    padding: 16px;
    color: ${(props) => props.theme.colors.text};
  }
  
}

`;


export const FooterFormCategory = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

