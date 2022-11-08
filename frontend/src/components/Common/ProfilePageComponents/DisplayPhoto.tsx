import React from "react";

interface IDisplayPhotoProps {
  imgSrc: string;
  imgAlt?: string;
}

export const DisplayPhoto: React.FC<IDisplayPhotoProps> = (props) => {
  const img_alt = props.imgAlt ?? "Display Photo";
  return (
    <div>
      <div>
        <img
          style={{
            verticalAlign: "middle",
            height: "20rem",
            width: "100rem",
            objectFit: "cover",
          }}
          src={process.env.PUBLIC_URL + `/images/${props.imgSrc}`}
          alt={img_alt}
        />
      </div>
    </div>
  );
};
