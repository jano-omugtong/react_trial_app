import React from "react";
import { MainBodySelection } from "./MainBodySelection";

interface SubSelectionProps {
  landing_page: string;
}

export const SubSelection = (props: SubSelectionProps) => {
  const rSelection =
    props.landing_page === "trade_business"
      ? "/tb_manufacturer"
      : "/trade_development/seller";
  const lSelection =
    props.landing_page === "trade_business"
      ? "/tb_concierge"
      : "/trade_development/buyer";

  return (
    <MainBodySelection
      rightIcon="dolly"
      rightLabel="メーカー・商社"
      rightLink={rSelection}
      rightSelection={rSelection}
      leftIcon="user"
      leftLabel="コンシェルジュ"
      leftLink={lSelection}
      leftSelection={lSelection}
    />
  );
};
