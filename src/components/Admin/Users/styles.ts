import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 24px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

export const UsersButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  .ContentButtonAdd{
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ButtonUsers = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${(props) => props.theme.colors.buttonSecondary};
  border-radius: 50px;
  padding: 8px 12px;
  color: #ffff;
  gap: 8px;

  @media (max-width: 500px) {
    padding: 0.3rem;
    justify-content: center;
  }

 
`;

export const ListUsers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 12px;
`;

export const ItemUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 4px;
  overflow: hidden;
  gap: 24px;

  :hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 500px) {
    gap: 6px;

    span {
      font-size: 14px;
    }
  }

  span {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .container-icon {
    display: flex;
    background: ${(props) => props.theme.colors.secondary};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);

    font-size: 18px;
  }

  .edit-user {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    gap: 14px;

    .edit-button {
      border: none;
      display: flex;
      align-items: center;
      background: rgba(0, 209, 255, 0.52);
      color: #2f80ed;
      padding: 2px;
      border-radius: 4px;
    }

    .delete-button {
      border: none;
      display: flex;
      align-items: center;
      background: rgba(255, 0, 0, 0.3);
      color: #eb5757;
      padding: 2.5px;
      border-radius: 4px;
    }
  }
`;

export const LoadingContainerUsers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  min-height: 50vh;
`;
