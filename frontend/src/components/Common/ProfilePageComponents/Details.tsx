import React from "react";

import {
  CertificateBadge,
  ICertificateBadgeProps as ICertificates,
} from "../CertificateBadge";
import {
  SpanWithCheckIcon,
  ISpanWithCheckIconProps,
} from "../SpanWithCheckIcon";

import "./ProfilePageComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum EIndividualOrGroup {
  Group,
  Individual,
}

enum EGender {
  Male,
  Female,
}

export interface IDetailsProps {
  name: string;
  position: string;
  shortIntro: string;
  profilePic: string;
  username: string;
  specialty_field: string;
  individual?: EIndividualOrGroup;
  prefecture: string;
  birthDate: string;
  gender: EGender;
  totalReward: number;
  arrConfirms: ISpanWithCheckIconProps[];
  arrCertificates: ICertificates[];
}

export const Details: React.FC<IDetailsProps> = (props) => {
  const getAge = (dateString: Date) => {
    const today = new Date();
    const birthDate = dateString;
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    const lastDigit = age % 10;
    const displayed_age =
      lastDigit > 5 ? `${age - lastDigit}代後半` : `${age - lastDigit}代前半`;
    return displayed_age;
  };

  const individual_or_group = props.individual ? "個人" : "グループ";
  const age = getAge(new Date(props.birthDate));
  const gender = props.gender ? "男性" : "女性";

  return (
    <div
      className="content columns desktop profile-page-margin-x"
      style={{
        marginBottom: "0px",
      }}
    >
      <div
        className="column is-1"
        style={{
          minWidth: "80px",
          minHeight: "40px",
        }}
      >
        <img
          style={{
            verticalAlign: "middle",
            height: "5rem",
            width: "5rem",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            marginTop: "-30px",
          }}
          src={process.env.PUBLIC_URL + `/images/${props.profilePic}`}
          alt="Profile_Photo"
        />
      </div>
      <div className="column is-11">
        <table className="profile-page-table">
          <tbody>
            <tr>
              <td>
                <div className="columns">
                  <div className="column is-9">
                    <p
                      className="title is-3"
                      style={{
                        marginBottom: "18px",
                      }}
                    >
                      {props.name}
                    </p>
                    <p className="subtitle is-5">{`${props.position}【${props.shortIntro}】`}</p>
                  </div>
                  <div className="column is-3">
                    <div
                      className="buttons mt-2 is-justify-content-end"
                      style={{
                        marginBottom: "-5px",
                      }}
                    >
                      <button className="button is-small is-info is-outlined">
                        <FontAwesomeIcon
                          icon={["fas", "envelope"]}
                          className="icon is-small"
                        />
                      </button>
                      <button className="button is-small is-info is-outlined">
                        仕事を依頼
                      </button>
                      <button
                        className="button is-small is-info"
                        style={{ marginRight: "0.5rem" }}
                      >
                        相談する
                      </button>
                    </div>
                    <div className="buttons is-justify-content-end">
                      <button
                        className="button is-small mt-1"
                        style={{ marginRight: "0.5rem" }}
                      >
                        <FontAwesomeIcon
                          icon={["fas", "ellipsis-vertical"]}
                          className="icon is-small"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <p className="has-text-grey-light">
                  {props.username} |{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {props.specialty_field}
                  </span>{" "}
                  | {individual_or_group} |{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {props.prefecture}
                  </span>{" "}
                  | {age} | {gender} |{" "}
                  {`総獲得報酬: ${Intl.NumberFormat("en-US").format(
                    props.totalReward
                  )} 円`}
                </p>
              </td>
            </tr>
            <tr>
              <td className="is-inline-flex">
                {props.arrCertificates.map((currentValue, index) => {
                  return (
                    <CertificateBadge
                      key={index}
                      imgSrc={currentValue.imgSrc}
                      imgAlt={currentValue.imgAlt}
                    />
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>
                <hr
                  style={{
                    margin: "0",
                    backgroundColor: "lightgrey",
                  }}
                />
                <p>
                  {props.arrConfirms.map((currentValue, index) => {
                    return (
                      <SpanWithCheckIcon key={index} text={currentValue.text} />
                    );
                  })}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
