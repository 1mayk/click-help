import { ISide } from "../../../interfaces/ISide";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as S from "./styles";
import SideList from "./sideList";

function SideBar({ children }: ISide) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <S.Container>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <SideList onDataReturn={showSidebar} />
          </nav>
        </IconContext.Provider>
        <main className={sidebar ? "window active" : "window"}>{children}</main>
      </S.Container>
    </>
  );
}

export default SideBar;
