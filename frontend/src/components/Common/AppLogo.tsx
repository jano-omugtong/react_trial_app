import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const AppLogo = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faHouse as IconProp}
        width="112"
        className="icon is-large has-text-success"
      />
      <span className="has-text-weight-bold">
        StayHome<sup className="has-text-weight-normal">©</sup>
      </span>
    </>
  );
};
