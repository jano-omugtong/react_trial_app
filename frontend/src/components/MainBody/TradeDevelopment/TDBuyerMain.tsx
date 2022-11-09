import React from "react";

import "../MainBody.css";
import { ProfilePage } from "../../Common/ProfilePage";
import { IDetailsProps } from "../../Common/ProfilePageComponents/Details";
import { ISingleReviewProps } from "../../Common/SingleReview";
import { IProfileStatsProps } from "../../Common/ProfilePageComponents/ProfileStats";
import { Outlet, useLocation } from "react-router-dom";
import { RequestedProjList } from "./Buyer/ListOfRequestedProj/RequestedProjList";

export const TDBuyerMain: React.FC = () => {
  const location = useLocation();
  const td_buyer_page = "/trade_development/buyer";

  const profile_details: IDetailsProps = {
    name: "Dummy Sample",
    position: "Webマーケティングで売上・利益最大化をサポート",
    shortIntro: "大手企業との 取引・売上アップの実績多数",
    gender: 0,
    prefecture: "愛知県",
    birthDate: "1994/09/28",
    profilePic: "Pokemon-Male-Protag.png",
    specialty_field: "マーケティング",
    individual: 0,
    totalReward: 25579393,
    arrCertificates: [
      { imgSrc: "badge_boulder.png", imgAlt: "Boulder" },
      {
        imgSrc: "badge_cascade.png",
        imgAlt: "Cascade",
      },
    ],
    arrConfirms: [
      { text: "本人確認" },
      { text: "機密保持確認" },
      { text: "電話確認" },
      { text: "ランサーズチェック" },
    ],
    username: "ryuujisino",
  };

  const profile_promoted_review: ISingleReviewProps = {
    reviewTitle:
      "Web集客の相談【SEO・広告運用・SNS・メルマガなど全チャンネル対応可能】",
    reviewerProfilePic: "Pokemon-Female-Protag.png",
    acquisitionRewardStart: 10000,
    acquisitionRewardEnd: 20000,
    review1stLine: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat temporibus ab id, molestias exercitationem atque eaque
                non recusandae facilis! Aut, odio consequuntur eligendi nesciunt
                dolores provident recusandae ipsa voluptates quae!`,
    review2ndLine: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat temporibus ab id, molestias exercitationem atque eaque
                non recusandae facilis! Aut, odio consequuntur eligendi nesciunt
                dolores provident recusandae ipsa voluptates quae!`,
    reviewDate: "2022/11/07",
  };

  const profile_stats: IProfileStatsProps = {
    numberOfAchievements: 433,
    numberOfNightClass: 21,
    numberOfEvaluationOK: 431,
    numberOfEvaluationSAD: 1,
    completionRate: 98,
    taskApprovalRate: 95,
  };

  return (
    <>
      {location.pathname !== td_buyer_page ? (
        <>
          <Outlet />
        </>
      ) : (
        <ProfilePage
          dpImgSrc="Pokemon-Camp.png"
          details={profile_details}
          profileStats={profile_stats}
          promotedReview={profile_promoted_review}
          arrPriceListCard={[
            { imgSrc: "p1.png", imgAlt: "P1" },
            { imgSrc: "p2.png", imgAlt: "P2" },
            { imgSrc: "p3.png", imgAlt: "P3" },
            { imgSrc: "p4.png", imgAlt: "P4" },
          ]}
        />
      )}
    </>
  );
};
