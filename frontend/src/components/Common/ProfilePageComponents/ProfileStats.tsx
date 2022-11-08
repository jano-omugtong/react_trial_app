import React from "react";

import "./ProfilePageComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IProfileStatsProps {
  numberOfAchievements: number;
  numberOfNightClass: number;
  numberOfEvaluationOK: number;
  numberOfEvaluationSAD: number;
  completionRate: number;
  taskApprovalRate: number;
}

export const ProfileStats: React.FC<IProfileStatsProps> = (props) => {
  return (
    <div
      className="has-text-centered profile-page-margin-x"
      style={{
        background: "#dbdbdb47",
      }}
    >
      <div className="columns">
        <div className="column">
          <p className="title is-6">
            <FontAwesomeIcon
              icon={["fas", "clipboard-check"]}
              className="icon is-small"
            />{" "}
            美績数
          </p>
          <p>
            <span className="title text-dont-break">
              {props.numberOfAchievements}
            </span>
            件
          </p>
          <p className="subtitle is-7">
            夕スク数: {props.numberOfNightClass}件
          </p>
        </div>
        <div
          id="concierge-stats-evaluation"
          className="column"
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          <p className="title is-6">
            <FontAwesomeIcon
              icon={["fas", "crown"]}
              className="icon is-small"
            />{" "}
            評価
          </p>
          <div className="is-inline-flex">
            <p
              className="fa-layers"
              style={{
                height: "auto",
                marginRight: "15px",
              }}
            >
              <FontAwesomeIcon
                icon={["fas", "circle"]}
                className="icon smirk-smiley-color"
              />
              <FontAwesomeIcon
                inverse
                icon={["fas", "face-smile-wink"]}
                className="icon has-text-white"
              />
            </p>
            <p className="mr-5">
              <span className="title text-dont-break">
                {props.numberOfEvaluationOK}
              </span>
              件
            </p>

            <p
              className="fa-layers"
              style={{
                height: "auto",
                marginRight: "15px",
              }}
            >
              <FontAwesomeIcon
                icon={["fas", "circle"]}
                className="icon has-text-info"
              />
              <FontAwesomeIcon
                inverse
                icon={["fas", "face-sad-tear"]}
                className="icon has-text-white"
              />
            </p>
            <p className="mr-5">
              <span className="title text-dont-break">
                {props.numberOfEvaluationSAD}
              </span>
              件
            </p>
          </div>
        </div>
        <div className="column">
          <p className="title is-6">
            <FontAwesomeIcon
              icon={["fas", "chart-pie"]}
              className="icon is-small"
            />{" "}
            完了率
          </p>
          <p>
            <span className="title text-dont-break">
              {props.completionRate}
            </span>
            %
          </p>
          <p className="subtitle is-7">
            夕スク承認率: {props.taskApprovalRate}%
          </p>
        </div>
      </div>
    </div>
  );
};
