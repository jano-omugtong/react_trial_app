import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

import AgentLogin from "./components/Access/AgentLogin";
import Dashboard from "./components/Dashboard";
import Login from "./components/Access/Login";
import Register from "./components/Access/Register";

import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { TBLanding } from "./components/MainBody/TradeBusiness/TBLanding";
import { TDBuyerMain } from "./components/MainBody/TradeDevelopment/TDBuyerMain";
import { TDSellerMain } from "./components/MainBody/TradeDevelopment/TDSellerMain";
import { SubSelection } from "./components/MainBody/Selection/SubSelection";
import { PageNotFound } from "./components/Navigation/PageNotFound";

function App() {
  ReactSession.setStoreType("localStorage");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agentLogin" element={<AgentLogin />} />
        <Route path="/landing" element={<LandingPage />}>
          <Route path="/landing/trade_business" element={<SubSelection />} />
          <Route path="/landing/trade_development" element={<SubSelection />} />
        </Route>
        <Route path="/trade_business" element={<TBLanding />} />
        <Route path="/trade_development" element={<LandingPage />}>
          <Route path="/trade_development/buyer" element={<TDBuyerMain />} />
          <Route path="/trade_development/seller" element={<TDSellerMain />} />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
