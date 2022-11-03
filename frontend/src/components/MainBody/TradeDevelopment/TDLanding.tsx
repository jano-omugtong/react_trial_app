import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TDBuyerMain } from "./TDBuyerMain";
import { TDSellerMain } from "./TDSellerMain";

export const TDLanding = () => {
  const location = useLocation();
  const td_buyer_page = "/trade_development/buyer";
  const td_seller_page = "/trade_development/seller";

  return (
    <div>
      {location.pathname === td_buyer_page ? (
        <TDBuyerMain />
      ) : location.pathname === td_seller_page ? (
        <TDSellerMain />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
