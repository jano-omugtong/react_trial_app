import React from "react";

import { MainBodyNavCard } from "../MainBodyNavCard";

interface IMainBodySelectionProps {
  rightIcon: string;
  rightLabel: string;
  rightDescription?: string;
  rightLink: string;
  leftIcon: string;
  leftLabel: string;
  leftDescription?: string;
  leftLink: string;
}

export const MainBodySelection: React.FC<IMainBodySelectionProps> = (props) => {
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
            margin: "auto",
            width: "50%",
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
            margin: "auto",
            width: "50%",
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
