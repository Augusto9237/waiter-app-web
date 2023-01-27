import { CaretLeft, CaretRight, ChartPieSlice, CookingPot, NotePencil, SignOut, UsersThree } from "phosphor-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonOpen, Container, SideBarBody, ButtonLogout,FooterSidebar } from "./styles";
import { AuthContext } from "../../../context/AuthContext";

export default function SideBar() {
  const { signout } = useContext(AuthContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <Container sidebarVisible={sidebarVisible}>
      {sidebarVisible ? (
        <ButtonOpen onClick={() => setSidebarVisible(false)}><CaretRight size={20} /></ButtonOpen>
      ) : (
        <ButtonOpen onClick={() => setSidebarVisible(true)}><CaretLeft size={20} /></ButtonOpen>
      )}

      <SideBarBody sidebarVisible={sidebarVisible}>
        <Link to='/'>
          <div className="sidebarIconItem">
            <span><ChartPieSlice size={24} /></span>
            <strong>Dashboard</strong>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="sidebarIconItem">
            <span><NotePencil size={24} /></span>
            <strong>Pedidos</strong>
          </div>
        </Link>

        <Link to='/menu'>
          <div className="sidebarIconItem">
            <span><CookingPot size={24} /></span>
            <strong>Cardápio</strong>
          </div>
        </Link>

        <Link to='/users'>
          <div className="sidebarIconItem">
            <span><UsersThree size={24} /></span>
            <strong>Usuários</strong>
          </div>
        </Link>
      </SideBarBody>
      <FooterSidebar>
        <ButtonLogout onClick={signout}>
          <SignOut size={20} />
          <strong>Sair</strong>
        </ButtonLogout>
      </FooterSidebar>

    </Container>
  );
}
