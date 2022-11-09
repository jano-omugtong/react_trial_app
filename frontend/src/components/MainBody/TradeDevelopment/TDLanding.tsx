import React from "react";
import { Outlet } from "react-router-dom";

export const TDLanding: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
