import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../RequestedProjList.css";

interface IRPLProjectProps {
  certifiedClient?: boolean;
  //   projName: string;
  //   fieldName: string;
  //   fieldRate: string;
  //   projDesc: string;
  //   projTags?: string[];
  //   hourlyRate: number[];
  //   noOfContracts: number[];
  //   durationDate: string;
  //   comapanyLogo: string;
  //   companyName: string;
  //   postedDate: string;
}

export const RPLProject: React.FC<IRPLProjectProps> = (props) => {
  const monthDiff = (dateFrom: Date, dateTo: Date) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  return (
    <>
      {props.certifiedClient ? (
        <div
          className="has-background-info is-flex pl-1 pr-2"
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
      <div className={`box ${props.certifiedClient ? "certified-client" : ""}`}>
        <div
          style={{
            content: "Snippet",
            alignItems: "stretch",
            display: "flex",
          }}
        ></div>
        <div className="columns">
          <div className="column is-7">
            <p className="title is-4 has-text-info">Project Name</p>
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
              Field Rate
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus pariatur incidunt, voluptatibus ipsum quas doloribus
              eaque aliquid at illo cum odit voluptates blanditiis sit officia
              corporis praesentium mollitia sequi alias?
            </p>
            <p className="mt-2">
              <span className="tag mr-2">Hey</span>
            </p>
          </div>
          <div className="column is-5">
            <div
              className="columns"
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
                    {Intl.NumberFormat("en-US").format(1000)}
                  </span>
                  円~{" "}
                  <span className="is-size-3">
                    {Intl.NumberFormat("en-US").format(1500)}
                  </span>
                  円
                </p>
              </div>
              <div className="column is-4 has-text-centered proj-details">
                <p>
                  <span className="is-size-5">契約数</span>
                  <span className="is-size-3">{` ${0} `}</span>人
                </p>
                <p>
                  <span className="is-size-6">（募集人数 {1}人）</span>
                </p>
              </div>
              <div className="column is-4 has-text-centered proj-details">
                <p>
                  <span className="is-size-5">あと</span>
                  <span className="is-size-3">{` ${5} `}</span>日
                </p>
                <p>
                  <span className="is-size-6">
                    （
                    {`${
                      new Date().getMonth() + 1
                    }月${new Date().getDate()}日まで`}
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
                src={process.env.PUBLIC_URL + `/images/${"Pokeball.png"}`}
                alt="Company Logo"
                style={{
                  objectFit: "cover",
                  verticalAlign: "middle",
                  height: "2.25rem",
                  width: "2.25rem",
                }}
              />
              <span className="mx-2">CompanyName</span>
            </p>
          </div>
          <div className="column is-7 is-flex is-justify-content-end">
            <p className="has-text-grey is-align-self-center text-dont-break mx-2">{`掲載日：${new Date().getFullYear()}年${
              new Date().getMonth() + 1
            }月${new Date().getDate()}日`}</p>
            <button className="button mx-2">
              <FontAwesomeIcon
                icon={["fas", "bookmark"]}
                className="icon is-size-7 has-text-warning mr-1"
              />
              気になる
            </button>
            <button className="button is-info ml-2">
              この仕事に似た仕事を依頼する
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
