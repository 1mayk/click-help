import { ISide } from "../../../interfaces/ISide";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideList from "../../molecules/MenuSidebar/sideList";
import MenuUser from "../../molecules/MenuUser";
import MenuTherapist from "../../molecules/MenuTherapist";
import useAppContext from "../../../hooks/useAppContext";
import * as FaIcons from "react-icons/fa";
import * as S from "./styles";

function SideBar({ children }: ISide) {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useAppContext();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <S.Container>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        {user.role === "user" ? <MenuUser /> : <MenuTherapist />}

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <SideList onDataReturn={showSidebar} />
        </nav>

        <main className={sidebar ? "window active" : "window"}>{children}</main>
      </S.Container>
    </>
  );
}

export default SideBar;
