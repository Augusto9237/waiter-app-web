import { useState } from "react";
import { ButtonOpen, Container, HeaderSideBar, SideBarBody } from "./styles";

export default function SideBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  return (
    <Container>
      {sidebarVisible ? (
        <ButtonOpen onClick={() => setSidebarVisible(false)}>{"<"}</ButtonOpen>
      ) : (
        <ButtonOpen onClick={() => setSidebarVisible(true)}>{">"}</ButtonOpen>
      )}

      <HeaderSideBar>
        <span>👨‍💻</span>
        <strong>Admin</strong>
      </HeaderSideBar>
      <SideBarBody>
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
