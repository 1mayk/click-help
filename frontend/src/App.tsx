import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/User/Home";
import HomeTherapist from "./pages/Therapist/Home";
import { Route, Routes, Navigate, useLocation } from "react-router";
import pathsWithSidebar from "./helpers/pathsWithSidebar";
import SideBar from "./components/organisms/SideBar";

function App() {
  const location = useLocation();
  return (
    <>
      {pathsWithSidebar.includes(location.pathname) ? (
        <SideBar>
          <Routes>
            <Route path="/user" element={<HomeUser />} />
            <Route path="/therapist" element={<HomeTherapist />} />
          </Routes>
        </SideBar>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
