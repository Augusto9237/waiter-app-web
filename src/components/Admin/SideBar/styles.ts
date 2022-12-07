import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 1733px) {
    width: 250px;
  }
`;

export const HeaderSideBar = styled.header`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    background: #d73035;
    border-radius: 4px;
  }
`;

export const SideBarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .sidebarIconItem {
    padding: 6px;
    background: #cccccc;
  }
`;
