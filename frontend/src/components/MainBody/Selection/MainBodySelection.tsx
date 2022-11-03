import React from "react";

import { MainBodyNavCard } from "../MainBodyNavCard";

interface MainBodySelectionProps {
  rightIcon: string;
  rightLabel: string;
  rightDescription?: string;
  rightLink: string;
  leftIcon: string;
  leftLabel: string;
  leftDescription?: string;
  leftLink: string;
}

export const MainBodySelection = (props: MainBodySelectionProps) => {
  return (
    <div
      className="columns desktop"
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      <div className="column is-6">
        <div
          className="hero"
          style={{
            height: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <MainBodyNavCard
            icon={props.leftIcon}
            label={props.leftLabel}
            link={props.leftLink}
          />
        </div>
      </div>
      <div className="column is-6">
        <div
          className="hero"
          style={{
            height: "100%",
          }}
        >
          <MainBodyNavCard
            icon={props.rightIcon}
            label={props.rightLabel}
            link={props.rightLink}
          />
        </div>
      </div>
    </div>
  );
};