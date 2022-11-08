import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISpanWithCheckIconProps {
  text: string;
}

export const SpanWithCheckIcon: React.FC<ISpanWithCheckIconProps> = (props) => {
  return (
    <span className="mx-2">
      <FontAwesomeIcon
        icon={["fas", "check"]}
        className="icon is-small has-text-success"
      />{" "}
      {props.text}
    </span>
  );
};
