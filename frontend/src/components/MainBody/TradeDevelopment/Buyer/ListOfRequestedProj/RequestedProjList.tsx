import React from "react";
import { RPLFilter } from "./elements/RPLFilter";
import { RPLPagination } from "./elements/RPLPagination";
import { RPLProject } from "./elements/RPLProject";

export const RequestedProjList: React.FC = () => {
  return (
    <div
      className="box is-fullwidth is-fullheight"
      style={{
        margin: "30px",
        // height: "35rem",
        // width: "60rem",
      }}
    >
      <RPLFilter />
      <RPLPagination />
      <RPLProject certifiedClient={true} />
    </div>
  );
};
