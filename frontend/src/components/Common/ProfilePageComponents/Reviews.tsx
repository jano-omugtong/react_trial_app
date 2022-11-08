import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SingleReview, ISingleReviewProps } from "../SingleReview";

interface IReviewsProps {
  reviewProps: ISingleReviewProps;
}

export const Reviews: React.FC<IReviewsProps> = (props) => {
  const {
    reviewTitle,
    reviewerProfilePic,
    reviewDate,
    acquisitionRewardStart,
    acquisitionRewardEnd,
    review1stLine,
    review2ndLine,
  } = props.reviewProps;

  return (
    <div className="mt-5 profile-page-margin-x">
      <p className="title is-5">お客さまの声</p>
      <div>
        <SingleReview
          reviewTitle={reviewTitle}
          reviewDate={reviewDate}
          review2ndLine={review2ndLine}
          review1stLine={review1stLine}
          reviewerProfilePic={reviewerProfilePic}
          acquisitionRewardStart={acquisitionRewardStart}
          acquisitionRewardEnd={acquisitionRewardEnd}
        />
        <div>
          <p
            style={{
              cursor: "pointer",
            }}
            className="subtittle has-text-info has-text-centered"
          >
            もっと見る{" "}
            <FontAwesomeIcon
              icon={["fas", "caret-down"]}
              className="icon is-small"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
