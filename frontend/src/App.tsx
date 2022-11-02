import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactSession } from "react-client-session";

import AgentLogin from "./components/Access/AgentLogin";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import Login from "./components/Access/Login";
import Register from "./components/Access/Register";

import "./App.css";
import { TBLanding } from "./components/MainBody/TradeBusiness/TBLanding";
import { TDLanding } from "./components/MainBody/TradeDevelopment/TDLanding";
import { TDBuyerMain } from "./components/MainBody/TradeDevelopment/TDBuyerMain";
import { TDSellerMain } from "./components/MainBody/TradeDevelopment/TDSellerMain";

function App() {
  ReactSession.setStoreType("localStorage");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agentLogin" element={<AgentLogin />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/trade_business" element={<TBLanding />} />
        <Route path="/trade_development" element={<TDLanding />}>
          <Route path="/trade_development/buyer" element={<TDBuyerMain />} />
          <Route path="/trade_development/seller" element={<TDSellerMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
