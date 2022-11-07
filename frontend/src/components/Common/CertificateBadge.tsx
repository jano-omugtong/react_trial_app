import React from "react";

interface ICertificateBadgeProps {
  img_src: string;
  img_alt: string;
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
          src={props.img_src}
          alt={props.img_alt}
          style={{
            objectFit: "cover",
            verticalAlign: "middle",
          }}
        />
      </figure>
    </div>
  );
};
