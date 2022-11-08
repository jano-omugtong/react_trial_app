import React from "react";
import { DisplayPhoto } from "./ProfilePageComponents/DisplayPhoto";
import { Details, IDetailsProps } from "./ProfilePageComponents/Details";
import {
  ProfileStats,
  IProfileStatsProps,
} from "./ProfilePageComponents/ProfileStats";
import { ProfileSelection } from "./ProfilePageComponents/ProfileSelection";
import { Reviews } from "./ProfilePageComponents/Reviews";
import { ISingleReviewProps } from "./SingleReview";
import { PriceListGroup } from "./ProfilePageComponents/PriceListGroup";
import { IPriceListCardProps } from "./PriceListCard";

interface IProfilePageProps {
  dpImgSrc: string;
  dpImgAlt?: string;
  details: IDetailsProps;
  profileStats: IProfileStatsProps;
  promotedReview: ISingleReviewProps;
  arrPriceListCard: IPriceListCardProps[];
}

export const ProfilePage: React.FC<IProfilePageProps> = (props) => {
  const {
    name,
    position,
    shortIntro,
    gender,
    prefecture,
    birthDate,
    profilePic,
    specialty_field,
    individual,
    totalReward,
    arrCertificates,
    arrConfirms,
    username,
  } = props.details;

  const {
    completionRate,
    numberOfAchievements,
    numberOfEvaluationOK,
    numberOfEvaluationSAD,
    numberOfNightClass,
    taskApprovalRate,
  } = props.profileStats;

  return (
    <div className="mx-2">
      <DisplayPhoto imgSrc={props.dpImgSrc} imgAlt={props.dpImgAlt} />

      <Details
        name={name}
        position={position}
        shortIntro={shortIntro}
        gender={gender}
        prefecture={prefecture}
        birthDate={birthDate}
        profilePic={profilePic}
        specialty_field={specialty_field}
        individual={individual}
        totalReward={totalReward}
        arrCertificates={arrCertificates}
        arrConfirms={arrConfirms}
        username={username}
      />

      <ProfileStats
        numberOfAchievements={numberOfAchievements}
        numberOfNightClass={numberOfNightClass}
        numberOfEvaluationOK={numberOfEvaluationOK}
        numberOfEvaluationSAD={numberOfEvaluationSAD}
        completionRate={completionRate}
        taskApprovalRate={taskApprovalRate}
      />

      <ProfileSelection />

      <Reviews reviewProps={props.promotedReview} />

      <PriceListGroup arrPriceListCard={props.arrPriceListCard} />
    </div>
  );
};
