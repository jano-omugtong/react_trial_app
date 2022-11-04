import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SpanWithCheckIconProps {
  text: string;
}

export const SpanWithCheckIcon = (props: SpanWithCheckIconProps) => {
  return (
    <span className="mx-2">
      <FontAwesomeIcon
        icon={["fas", "check"]}
        className="icon is-small has-text-success"
      />
      {props.text}
    </span>
  );
};
