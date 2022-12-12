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
    width: 100%;
    gap: 12px
`;

export const ButtonCategories = styled.button`
    border: none;
    background: #333333;
    border-radius: 48px;
    padding: 14px 24px;
    color: #fff
`;

export const ButtonProducts = styled.button`
    border: none;
    background: #D73035;
    border-radius: 48px;
    padding: 14px 24px;
    color: #fff
`;
