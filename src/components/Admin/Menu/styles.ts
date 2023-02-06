import styled from "styled-components";

export const MenuContainer = styled.div`
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

export const LoadingContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  min-height: 65vh;
`;

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ButtonAdd = styled.button`
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

  span {
    font-size: 14px;
    line-height: 100%;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const ListCategories = styled.div`
  display: flex;
  overflow-x: auto;
  height: 124px;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ItemCategory = styled.div`
  position: relative;
  padding: 8px;
  min-width: 100px;

  .edit-category {
    display: none;
  }

  :hover {
    .edit-category {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 8px;
      margin-top: 6px;
      gap: 14px;

      .edit-button {
        border: none;
        display: flex;
        align-items: center;
        background: ${(props) => props.theme.supportingColors.secondary};
        color: ${(props) => props.theme.supportingColors.textSecondary};
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
  }
`;

export const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 12px;
`;

export const ItemProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
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

  .image-product {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .edit-product {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    gap: 14px;

    .edit-button {
      border: none;
      display: flex;
      align-items: center;
      background: ${(props) => props.theme.supportingColors.secondary};
      color: ${(props) => props.theme.supportingColors.textSecondary};
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
