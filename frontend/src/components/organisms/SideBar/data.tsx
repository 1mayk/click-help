import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const SidebarData = [
  {
    title: "Usuário",
    path: "/user",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Terapeuta",
    path: "/therapist",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Perfil",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Histórico",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Carteira",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Sair",
    path: "#",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];

export default SidebarData;
