import React from "react";

export interface IPriceListCardProps {
  imgSrc: string;
  imgAlt: string;
}

export const PriceListCard: React.FC<IPriceListCardProps> = (props) => {
  return (
    <div>
      <img
        style={{
          verticalAlign: "middle",
          width: "30rem",
          height: "13rem",
          margin: "10px",
        }}
        src={process.env.PUBLIC_URL + `/images/${props.imgSrc}`}
        alt={props.imgAlt}
      />
    </div>
  );
};
