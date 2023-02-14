import { CaretLeft, CaretRight, ChartPieSlice, CookingPot, NotePencil, SignOut, UsersThree } from "phosphor-react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ButtonOpen, Container, SideBarBody, ButtonLogout, FooterSidebar } from "./styles";
import { AuthContext } from "../../../context/AuthContext";

export default function SideBar() {
  const { signout } = useContext(AuthContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const activeStyle = {
    backgroundColor: "#ffabad",
    color: '#d73035'
  };

  return (
    <Container sidebarVisible={sidebarVisible}>
      {sidebarVisible ? (
        <ButtonOpen onClick={() => setSidebarVisible(false)}><CaretRight size={20} /></ButtonOpen>
      ) : (
        <ButtonOpen onClick={() => setSidebarVisible(true)}><CaretLeft size={20} /></ButtonOpen>
      )}

      <SideBarBody sidebarVisible={sidebarVisible} >
        <NavLink to='/' style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <div className="sidebarIconItem">
            <span><ChartPieSlice size={24} /></span>
            <strong>Dashboard</strong>
          </div>
        </NavLink>

        <NavLink to='/orders' style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <div className="sidebarIconItem">
            <span><NotePencil size={24} /></span>
            <strong>Pedidos</strong>
          </div>
        </NavLink>

        <NavLink to='/menu' style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <div className="sidebarIconItem">
            <span><CookingPot size={24} /></span>
            <strong>Cardápio</strong>
          </div>
        </NavLink>

        <NavLink to='/users' style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <div className="sidebarIconItem">
            <span><UsersThree size={24} /></span>
            <strong>Usuários</strong>
          </div>
        </NavLink>
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
