import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISingleReviewProps {
  reviewTitle: string;
  reviewerProfilePic: string;
  reviewDate: string;
  acquisitionRewardStart: number;
  acquisitionRewardEnd: number;
  review1stLine: string;
  review2ndLine?: string;
}

export const SingleReview: React.FC<ISingleReviewProps> = (props) => {
  return (
    <div className="columns">
      <div
        className="column is-1"
        style={{
          minWidth: "80px",
          minHeight: "60px",
        }}
      >
        <img
          style={{
            width: "3.5rem",
            height: "3.5rem",
            marginLeft: "18px",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
          }}
          src={process.env.PUBLIC_URL + `/images/${props.reviewerProfilePic}`}
          alt="Profile Pic"
        />
      </div>
      <div className="column is-10">
        <p
          className="subtitle has-text-info mb-0"
          style={{ textDecoration: "underline" }}
        >
          {props.reviewTitle}
        </p>
        <p className="has-text-grey-light">
          <span
            className="fa-layers"
            style={{
              marginRight: "5px",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "circle"]}
              className="icon is-small smirk-smiley-color"
            />
            <FontAwesomeIcon
              inverse
              icon={["fas", "face-smile-wink"]}
              className="icon is-small has-text-white"
            />
          </span>
          <span className="smirk-smiley-color">満足</span> | {"パッケージ "} |{" "}
          {`獲得報酬: ${Intl.NumberFormat("en-US").format(
            props.acquisitionRewardStart
          )}円~${Intl.NumberFormat("en-US").format(
            props.acquisitionRewardEnd
          )}円`}
        </p>
        <p className="my-2">{props.review1stLine}</p>
        <p>{props.review2ndLine}</p>
      </div>
      <div className="column is-1 has-text-grey-light">{props.reviewDate}</div>
    </div>
  );
};
