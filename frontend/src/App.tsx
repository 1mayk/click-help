import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes, Navigate } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home" replace /> } />
      <Route path="/home" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
    </Routes>
  );
}

export default App;
