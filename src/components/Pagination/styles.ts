import styled from "styled-components";

interface PaginationActive {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  height: 32px;
  justify-content: space-between;
  gap: 8px;
`;

export const ButtonNext = styled.button`
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
`;

export const ButtonPrevious = styled.button`
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
`;

export const ContentButtons = styled.div<PaginationActive>`
  display: flex;

  button {
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid
      ${(props) =>
        props.active
          ? props.theme.colors.buttonSecondary
          : props.theme.colors.border};
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) =>
      props.active
        ? props.theme.colors.buttonSecondary
        : props.theme.colors.text};
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
  }
`;
