import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../RequestedProjList.css";
import store from "../../../../../../services/store";
import { subscribeKey } from "valtio/utils";

export interface IRPLProjectProps {
  projId: number;
  certifiedClient?: boolean;
  projName: string;
  fieldName: string;
  fieldRate: string;
  projDetails: string;
  projTags?: string[];
  hourlyRate: number[];
  noOfContracts: number[];
  dueDate: string;
  companyLogo: string;
  companyName: string;
  postedDate: string;
  bookmarked: boolean;
}

interface IProps extends IRPLProjectProps {
  forExpandedSingleProject: boolean;
}

export const RPLProject: React.FC<IProps> = (props) => {
  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(
    store.requested_proj_list_vd_isChecked
  );

  subscribeKey(store, "requested_proj_list_vd_isChecked", (newValue) => {
    setShowDetails(newValue);
  });

  const monthDiff = (dueDate: Date) => {
    const today = new Date();
    return (
      dueDate.getMonth() -
      today.getMonth() +
      12 * (dueDate.getFullYear() - today.getFullYear())
    );
  };

  return (
    <>
      {props.certifiedClient ? (
        <div
          className="has-background-info is-flex pl-1 pr-2 pt-1"
          style={{
            width: "fit-content",
          }}
        >
          <FontAwesomeIcon
            icon={["fas", "award"]}
            className="icon has-text-warning mr-1"
          />
          <p className="title is-5 has-text-white">認定クライアント</p>
        </div>
      ) : null}
      <div
        className={`box ${props.certifiedClient ? "certified-client" : ""}`}
        key={props.projId}
      >
        <div
          style={{
            content: "Snippet",
            alignItems: "stretch",
            display: "flex",
          }}
        ></div>
        <div className="columns">
          <div
            className={`column ${
              showDetails || props.forExpandedSingleProject ? "is-7" : "is-4"
            }`}
          >
            <p className="title is-4 has-text-info">{props.projName}</p>
            <p
              className="subtitle is-5"
              style={{
                marginBottom: "2px",
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={["fas", "folder"]}
                  className="icon is-size-7 has-text-info mr-1"
                />
              </span>
              {props.fieldName + " " + props.fieldRate}
            </p>

            {showDetails || props.forExpandedSingleProject ? (
              <p
                className={`description-with-break ${
                  props.forExpandedSingleProject
                    ? ""
                    : "description-with-ellipsis"
                }`}
              >
                {props.projDetails}
              </p>
            ) : (
              <p
                style={{
                  minWidth: "40rem",
                }}
              ></p>
            )}

            <p className="mt-2">
              {props.projTags
                ? props.projTags.map((currentValue, index) => {
                    return (
                      <span className="tag mr-2" key={index}>
                        {" "}
                        {currentValue}{" "}
                      </span>
                    );
                  })
                : null}
            </p>
          </div>
          <div
            className={`column ${
              showDetails || props.forExpandedSingleProject ? "is-5" : "is-8"
            }`}
          >
            <div
              className="columns has-background-white"
              style={{
                height: "90%",
              }}
            >
              <div className="column is-4 has-text-centered proj-details">
                <p>
                  <span className="tag is-success">時間単価制</span>
                </p>
                <p className="has-text-danger">
                  <span className="is-size-3">
                    {Intl.NumberFormat("en-US").format(props.hourlyRate[0])}
                  </span>
                  円~{" "}
                  <span className="is-size-3">
                    {Intl.NumberFormat("en-US").format(props.hourlyRate[1])}
                  </span>
                  円
                </p>
              </div>
              <div className="column is-4 has-text-centered proj-details">
                <p>
                  <span className="is-size-5">契約数</span>
                  <span className="is-size-3">{` ${props.noOfContracts[0]} `}</span>
                  人
                </p>
                <p>
                  <span className="is-size-6">
                    （募集人数 {props.noOfContracts[1]}人）
                  </span>
                </p>
              </div>
              <div className="column is-4 has-text-centered proj-details">
                <p>
                  <span className="is-size-5">あと</span>
                  <span className="is-size-3">{` ${monthDiff(
                    new Date(props.dueDate)
                  )} `}</span>
                  日
                </p>
                <p>
                  <span className="is-size-6">
                    （
                    {`${new Date(props.dueDate).getMonth() + 1}月${new Date(
                      props.dueDate
                    ).getDate()}日まで`}
                    ）
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-12">
          <div className="column is-5">
            <p>
              <img
                src={process.env.PUBLIC_URL + `/images/${props.companyLogo}`}
                alt="Company Logo"
                style={{
                  objectFit: "cover",
                  verticalAlign: "middle",
                  height: "2.25rem",
                  width: "2.25rem",
                }}
              />
              <span className="mx-2">{props.companyName}</span>
            </p>
          </div>
          <div className="column is-7 is-flex is-justify-content-end">
            <p className="has-text-grey is-align-self-center text-dont-break mx-2">{`掲載日：${new Date().getFullYear()}年${
              new Date().getMonth() + 1
            }月${new Date().getDate()}日`}</p>
            {props.bookmarked ? (
              <button className="button mx-2">
                <FontAwesomeIcon
                  icon={["fas", "bookmark"]}
                  className="icon is-size-7 has-text-warning mr-1"
                />
                気になる
              </button>
            ) : (
              <button className="button mx-2">
                <FontAwesomeIcon
                  icon={["fas", "bookmark"]}
                  className="icon is-size-7 has-text-grey-lighter mr-1"
                />
                気になる
              </button>
            )}
            {props.forExpandedSingleProject ? (
              <button
                className="button sitewide-bg ml-2 has-text-white"
                onClick={() => {
                  navigate("/trade_development/buyer/requested_project_offer", {
                    state: { projectId: props.projId },
                  });
                }}
              >
                エントリーをオファーする。
              </button>
            ) : (
              <button
                className="button is-info ml-2"
                onClick={() => {
                  navigate(
                    `/trade_development/buyer/expanded_requested_project/${props.projId}`
                  );
                }}
              >
                この仕事に似た仕事を依頼する
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
