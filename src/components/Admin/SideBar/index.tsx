import { useState } from "react";
import { ButtonOpen, Container, HeaderSideBar, SideBarBody } from "./styles";

export default function SideBar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <Container sidebarVisible={sidebarVisible}>
      {sidebarVisible ? (
        <ButtonOpen onClick={() => setSidebarVisible(false)}>{'>'}</ButtonOpen>
      ) : (
        <ButtonOpen onClick={() => setSidebarVisible(true)}>{'<'}</ButtonOpen>
      )}

      <HeaderSideBar>
        <span>👨‍💻</span>
        <strong>Admin</strong>
      </HeaderSideBar>
      <SideBarBody sidebarVisible={sidebarVisible}>
        <div className="sidebarIconItem">
          <span>📊</span>
          <strong>Dashboard</strong>
        </div>

        <div className="sidebarIconItem">
          <span>🧾</span>
          <strong>Pedidos</strong>
        </div>

        <div className="sidebarIconItem">
          <span>🪑</span>
          <strong>Pedidos</strong>
        </div>

        <div className="sidebarIconItem">
          <span>🤵</span>
          <strong>Atendentes</strong>
        </div>
      </SideBarBody>
    </Container>
  );
}
