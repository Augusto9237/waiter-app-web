import styled from "styled-components";


export const FormTable = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 18px;
  padding: 22px;
  background: ${(props) => props.theme.colors.background};

  input {
    width: 100%;
    background: ${(props) => props.theme.colors.secondary};
    border: 1px solid rgba(204, 204, 204, 0.5);
    border-radius: 8px;
    padding: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  input::placeholder {
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
`;

export const Footer = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  padding: 20px 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
