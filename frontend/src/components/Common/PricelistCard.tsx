import React from "react";

interface IPricelistCardProps {
  imgSrc: string;
  imgAlt: string;
}

export const PricelistCard: React.FC<IPricelistCardProps> = (props) => {
  return (
    <div>
      <img
        style={{
          verticalAlign: "middle",
          width: "30rem",
          height: "13rem",
          margin: "10px",
        }}
        src={process.env.PUBLIC_URL + props.imgSrc}
        alt={props.imgAlt}
      />
    </div>
  );
};
