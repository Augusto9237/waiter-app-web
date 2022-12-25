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
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  strong {
    opacity: 0.7;
  }

  @media (min-width: 1620px) {
    width: 12rem;
  }

  @media (max-width: 1620px) {
    width: ${(props) => (props.sidebarVisible ? "60px" : "200px")};
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

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
  top: 12px;
  right: -14px;
  border: none;
  background: #d73035;
  border-radius: 50%;
  color: #ffff;

  @media (min-width: 1620px) {
    display: none;
  }

  @media (max-width: 600px) {
    top: 8px;
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
    background: rgba(255, 0, 0, 0.14);
    cursor: pointer;
    color: #d73035;
    border-left: 4px solid #d73035;
    padding-left: 14px;

    @media (max-width: 600px) {
      padding-left: 6px;
    }

    strong {
      opacity: 1;
    }
  }
`;
