import SidebarData from "./data";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { ISide } from "../../../interfaces/ISide";

function SideList(props: ISide) {
  return (
    <ul className="nav-menu-items">
      <li className="navbar-toggle">
        <Link to="#" className="menu-bars" onClick={props.onDataReturn}>
          <AiIcons.AiOutlineClose />
        </Link>
      </li>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SideList;
