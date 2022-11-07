import React from "react";
import { MainBodySelection } from "./MainBodySelection";
import { useLocation } from "react-router-dom";

export const SubSelection: React.FC = () => {
  const location = useLocation();
  const tb_page = "/trade_business";

  const rLink = location.pathname.includes(tb_page)
    ? "/tb_concierge"
    : "/trade_development/buyer";
  const lLink = location.pathname.includes(tb_page)
    ? "/tb_manufacturer"
    : "/trade_development/seller";

  // const rSelection =
  //   location.pathname === tb_page ? "/trade_business" : "/trade_development";
  // const lSelection =
  //   location.pathname === tb_page ? "/trade_business" : "/trade_development";

  return (
    <MainBodySelection
      leftIcon="dolly"
      leftLabel="メーカー・商社"
      leftLink={lLink}
      rightIcon="user"
      rightLabel="コンシェルジュ"
      rightLink={rLink}
    />
  );
};
