import React from "react";
import { MainBodySelection } from "./MainBodySelection";

export const MainSelection = () => {
  return (
    <MainBodySelection
      leftIcon="dolly"
      leftLabel="貿易開拓"
      leftLink="/landing/trade_development"
      rightIcon="ship"
      rightLabel="貿易業務"
      rightLink="/landing/trade_business"
    />
  );
};
