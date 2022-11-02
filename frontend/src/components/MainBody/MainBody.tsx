import React from "react";
import { useLocation } from "react-router-dom";
import { MainSelection } from "./Selection/MainSelection";
import { SubSelection } from "./Selection/SubSelection";
import { useSnapshot } from "valtio";

import store from "../../services/store";

export const MainBody = () => {
  const location = useLocation();
  const landing_page = "/landing";
  const tb_page = "/trade_business";

  const snap = useSnapshot(store);

  return (
    <div
      className="has-background-light"
      style={{
        height: "100%",
      }}
    >
      {location.pathname === landing_page ? (
        snap.selection_page === landing_page ? (
          <MainSelection />
        ) : (
          <SubSelection landing_page="trade_development" />
        )
      ) : location.pathname === tb_page ? (
        <SubSelection landing_page="trade_business" />
      ) : (
        <MainSelection />
      )}
    </div>
  );
};
