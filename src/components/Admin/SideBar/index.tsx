import { CaretLeft, CaretRight, ChartPieSlice, ClipboardText, ListBullets, UserCircleGear, UsersThree } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonOpen, Container, HeaderSideBar, SideBarBody } from "./styles";

export default function SideBar() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <Container sidebarVisible={sidebarVisible}>
      {sidebarVisible ? (
        <ButtonOpen onClick={() => setSidebarVisible(false)}><CaretRight size={20} /></ButtonOpen>
      ) : (
        <ButtonOpen onClick={() => setSidebarVisible(true)}><CaretLeft size={20}/></ButtonOpen>
      )}

      <HeaderSideBar>
        <span><UserCircleGear size={32} /></span>
        <strong>Admin</strong>
      </HeaderSideBar>
      <SideBarBody sidebarVisible={sidebarVisible}>
        <Link to='/admin'>
          <div className="sidebarIconItem">
            <span><ChartPieSlice size={24} /></span>
            <strong>Dashboard</strong>
          </div>
        </Link>

        <Link to='/admin/orders'>
          <div className="sidebarIconItem">
            <span><ClipboardText size={24} /></span>
            <strong>Pedidos</strong>
          </div>
        </Link>

        <Link to='/admin/menu'>
          <div className="sidebarIconItem">
            <span><ListBullets size={24} /></span>
            <strong>Cardapio</strong>
          </div>
        </Link>

        <div className="sidebarIconItem">
          <span><UsersThree size={32} /></span>
          <strong>Atendentes</strong>
        </div>
      </SideBarBody>
    </Container>
  );
}
