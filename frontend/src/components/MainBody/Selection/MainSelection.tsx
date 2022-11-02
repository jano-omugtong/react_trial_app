import React from "react";
import { MainBodySelection } from "./MainBodySelection";

export const MainSelection = () => {
  return (
    <MainBodySelection
      rightIcon="dolly"
      rightLabel="貿易開拓"
      rightSelection="/trade_development"
      leftIcon="ship"
      leftLabel="貿易業務"
      leftSelection="/trade_business"
    />
  );
};
