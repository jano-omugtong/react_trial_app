import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentLogin from "./components/AgentLogin";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agentLogin" element={<AgentLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
