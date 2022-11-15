import React from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "./Common/Footer";
import { MainSelection } from "./MainBody/Selection/MainSelection";
import { SubSelection } from "./MainBody/Selection/SubSelection";
import { TDLanding } from "./MainBody/TradeDevelopment/TDLanding";
import { Navbar } from "./Navigation/Navbar";
import { PageNotFound } from "./Navigation/PageNotFound";
import { Sidebar } from "./Navigation/Sidebar";

export const LandingPage: React.FC = () => {
  const location = useLocation();
  const landing_page = "/landing";
  const tb_page = "/trade_business";
  const td_page = "/trade_development";

  return (
    <div
      className="hero columns is-fullheight is-fullwidth has-background-light"
      style={{ flexDirection: "initial", margin: "0px" }}
    >
      <div
        className="column is-fullheight is-fullwidth is-2"
        style={{
          boxShadow: "-3px 0px 15px 0px #555",
          padding: "0px",
          position: "relative",
        }}
      >
        <Sidebar />
      </div>
      <div
        className="column hero is-fullheight is-fullwidth is-10"
        style={{
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <Navbar fromLogin={false} />

        <div
          className={
            !location.pathname.includes(landing_page)
              ? "container is-desktop"
              : ""
          }
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          {location.pathname.includes(landing_page) ? (
            location.pathname.includes(tb_page) ||
            location.pathname.includes(td_page) ? (
              <SubSelection />
            ) : (
              <MainSelection />
            )
          ) : location.pathname.includes(td_page) ? (
            <TDLanding />
          ) : (
            <PageNotFound />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};
