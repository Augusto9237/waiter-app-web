import styled from "styled-components";

interface sidebarProps {
  sidebarVisible: boolean;
}

export const Container = styled.div<sidebarProps>`
  position: fixed;
  width: ${(props) => (props.sidebarVisible ? "60px" : "200px")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 1620px) {
    width: 200px;
  }

  @media (max-width: 1620px) {
    width: ${(props) => (props.sidebarVisible ? "60px" : "200px")};
    strong {
      display: ${(props) => (props.sidebarVisible ? "none" : "flex")};
    }
  }

  @media (max-width: 600px) {
    width: ${(props) => (props.sidebarVisible ? "45px" : "200px")};
  }
`;

export const ButtonOpen = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 18px;
  right: -14px;
  border: none;
  background: #cccccc;
  border-radius: 50%;
  color: #ffff;

  @media (min-width: 1620px) {
    display: none;
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

export const SideBarBody = styled.div<sidebarProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 6px;

  a{
    text-decoration: none;
    outline: none;
  }

  .sidebarIconItem {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${(props) =>
    props.sidebarVisible ? "center" : "flex-start"};
    padding: 12px 24px;
    gap: 6px;

    @media (min-width: 1620px) {
      justify-content: flex-start;
    }

    strong {
      font-weight: 500;
      font-size: 16px;
    }
  }
  .sidebarIconItem:hover {
    background: #cccccc;
    cursor: pointer;
  }
`;
