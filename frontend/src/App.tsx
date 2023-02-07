import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeUser from "./pages/User/Home";
import HomeTherapist from "./pages/Therapist/Home";
import { Route, Routes, Navigate } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home" replace /> } />
      <Route path="/home" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/user" element={ <HomeUser/> } />
      <Route path="/user" element={ <HomeUser/> } />
      <Route path="/therapist" element={ <HomeTherapist/> } />
    </Routes>
  );
}

export default App;
