import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    padding: 24px;
`;

export const MenuButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px
`;

export const ButtonCategories = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: #333333;
    border-radius: 48px;
    padding: 12px;
    color: #fff;
`;

export const ButtonProducts = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: #D73035;
    border-radius: 48px;
    padding: 12px;
    color: #fff;
`;

export const ListCategories = styled.div`
 display: flex;
 overflow-x: auto;
 padding: 8px;
 gap: 24px;
`;

export const ItemCategory = styled.div`
 position: relative;
 padding: 8px;

 .edit-category{
    display: none;
 }

 :hover{
    .edit-category{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    gap: 8px
    }
 }
`;
