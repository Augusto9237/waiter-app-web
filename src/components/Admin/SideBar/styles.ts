import styled from "styled-components";

interface sidebarProps {
  sidebarVisible: boolean;
}

export const Container = styled.div<sidebarProps>`
  position: fixed;
  z-index: 1;
  width: ${(props) => (props.sidebarVisible ? "-12rem" : "12rem")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);

  @media (min-width: 1620px) {
    width: 12rem;
  }

  @media (max-width: 1620px) {
    width: ${(props) => (props.sidebarVisible ? "-12rem" : "12rem")};
    strong {
      display: ${(props) => (props.sidebarVisible ? "none" : "flex")};
    }
  }

  @media (max-width: 600px) {
    width: ${(props) => (props.sidebarVisible ? "45px" : "160px")};
  }
`;

export const ButtonOpen = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 16px;
  right: -14px;
  border: none;
  background: #cccccc;
  border-radius: 50%;
  color: #ffff;

  @media (min-width: 1620px) {
    display: none;
  }

  @media (max-width: 600px) {
    top: 12px;
  }
`;

export const HeaderSideBar = styled.header<sidebarProps>`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  padding-left: 16px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);

  @media (max-width: 600px) {
      padding: 8px;
      padding-left: 8px;
    }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #fff;

    background: #d73035;
    border-radius: 8px;
  }
`;

export const SideBarBody = styled.main<sidebarProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 6px;

  a {
    text-decoration: none;
    color: #333333;
  }

  .sidebarIconItem {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${(props) =>
      props.sidebarVisible ? "flex-start" : "flex-start"};
    padding: 12px;
    padding-left: 18px;
    gap: 6px;

    @media (min-width: 1620px) {
      justify-content: flex-start;
    }

    @media (max-width: 600px) {
      padding: 8px;
      padding-left: 10px;
    }

    strong {
      font-weight: 500;
      font-size: 16px;
    }
    span {
      display: flex;
      align-items: center;
    }
  }
  .sidebarIconItem:hover {
    background: #cccccc;
    cursor: pointer;
    color: #d73035;
  }
`;
