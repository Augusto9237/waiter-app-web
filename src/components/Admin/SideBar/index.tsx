import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to='/admin'>
          <div className="sidebarIconItem">
            <span>📊</span>
            <strong>Dashboard</strong>
          </div>
        </Link>

        <Link to='/admin/orders'>
          <div className="sidebarIconItem">
            <span>🧾</span>
            <strong>Pedidos</strong>
          </div>
        </Link>

        <Link to='/admin/menu'>
          <div className="sidebarIconItem">
            <span>🍛</span>
            <strong>Cardapio</strong>
          </div>
        </Link>

        <div className="sidebarIconItem">
          <span>🤵</span>
          <strong>Atendentes</strong>
        </div>
      </SideBarBody>
    </Container>
  );
}
