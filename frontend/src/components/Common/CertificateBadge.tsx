import React from "react";

export interface ICertificateBadgeProps {
  imgSrc: string;
  imgAlt: string;
  rectangle?: boolean;
}

export const CertificateBadge: React.FC<ICertificateBadgeProps> = (props) => {
  return (
    <div>
      <figure
        className="image is-flex is-align-items-flex-end"
        style={{
          marginRight: "8px",
          marginLeft: "8px",
        }}
      >
        <img
          className={`image ${props.rectangle ? "is-64x128" : "is-64x64"}`}
          src={process.env.PUBLIC_URL + `/images/${props.imgSrc}`}
          alt={process.env.PUBLIC_URL + `/images/${props.imgAlt}`}
          style={{
            objectFit: "cover",
            verticalAlign: "middle",
          }}
        />
      </figure>
    </div>
  );
};
