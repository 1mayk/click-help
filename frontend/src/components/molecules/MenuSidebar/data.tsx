import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

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
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
  {
    title: "Histórico",
    path: "#",
    icon: <RiIcons.RiHistoryLine />,
    cName: "nav-text",
  },
  {
    title: "Carteira",
    path: "#",
    icon: <BsIcons.BsWallet />,
    cName: "nav-text",
  },
  {
    title: "Sair",
    path: "/",
    icon: <IoIcons.IoMdExit />,
    cName: "nav-text",
  },
];

export default SidebarData;
