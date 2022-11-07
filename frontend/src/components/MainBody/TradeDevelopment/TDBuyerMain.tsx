import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactSession } from "react-client-session";

import { CertificateBadge } from "../../Common/CertificateBadge";
import { SpanWithCheckIcon } from "../../Common/SpanWithCheckIcon";

import "../MainBody.css";
import { PricelistCard } from "../../Common/PricelistCard";

export const TDBuyerMain: React.FC = () => {
  return (
    <div className="mx-2">
      {/* display photo */}
      <div>
        <img
          style={{
            verticalAlign: "middle",
            height: "20rem",
            width: "100rem",
            objectFit: "cover",
          }}
          src={process.env.PUBLIC_URL + "/images/Pokemon-Camp.png"}
          alt="Display_Photo"
        />
      </div>

      {/* details */}
      <div
        className="content columns desktop"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
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
            src={process.env.PUBLIC_URL + "/images/Pokemon-Male-Protag.png"}
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
                          marginTop: "5px",
                          marginBottom: "18px",
                        }}
                      >
                        Name
                      </p>
                      <p className="subtitle is-5">Position</p>
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
                    {"ryuujisino"} |{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {"マーケティング"}
                    </span>{" "}
                    | {"個人"} |{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {"愛知県"}
                    </span>{" "}
                    | {"30代前半"} | {"男性"} | {"総獲得報酬: 25,579,393 円"}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="is-inline-flex">
                  <CertificateBadge
                    img_src={
                      process.env.PUBLIC_URL + "/images/badge_boulder.png"
                    }
                    img_alt="Boulder"
                  />
                  <CertificateBadge
                    img_src={
                      process.env.PUBLIC_URL + "/images/badge_cascade.png"
                    }
                    img_alt="Cascade"
                  />
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
                    <SpanWithCheckIcon text="本人確認" />
                    <SpanWithCheckIcon text="機密保持確認" />
                    <SpanWithCheckIcon text="電話確認" />
                    <SpanWithCheckIcon text="ランサーズチェック" />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* stats */}
      <div
        className="has-text-centered"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
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
              <span className="title text-dont-break">433</span> 件
            </p>
            <p className="subtitle is-7">夕スク数: 21件</p>
          </div>
          <div
            id="concierge-stats-evaluation"
            className="column"
            style={{
              // borderRight: "solid 5px grey",
              // borderLeft: "solid 5px grey",
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
                  className="icon has-text-warning"
                />
                <FontAwesomeIcon
                  inverse
                  icon={["fas", "face-smile-wink"]}
                  className="icon has-text-white"
                />
              </p>
              <p className="mr-5">
                <span className="title text-dont-break">431</span> 件
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
                <span className="title text-dont-break">1</span> 件
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
              <span className="title text-dont-break">98</span>%
            </p>
            <p className="subtitle is-7">夕スク承認率: 95%</p>
          </div>
        </div>
      </div>

      {/* selection */}
      <div
        className="has-text-centered my-5"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <div className="columns">
          <div className="column">
            <p className="title is-6">自己紹介</p>
          </div>
          <div className="column">
            <p className="title is-6">料金表</p>
          </div>
          <div className="column">
            <p className="title is-6">実績・評価</p>
          </div>
          <div className="column">
            <p className="title is-6">経歴</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: "0",
          backgroundColor: "lightgrey",
        }}
      />

      <div
        className="mt-5"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <p className="title is-5">お客さまの声</p>
        <div>
          <div className="columns">
            <div className="column is-1">
              <img
                style={{
                  verticalAlign: "middle",
                  width: "2.15rem",
                  height: "2.15rem",
                  margin: "10px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={
                  process.env.PUBLIC_URL +
                  `/${ReactSession.get("user_img_src")}`
                }
                alt="Profile Pic"
              />
            </div>
            <div className="column is-10">
              <p
                className="subtitle has-text-info mb-0"
                style={{ textDecoration: "underline" }}
              >
                Title
              </p>
              <p className="has-text-grey-light">
                {"個人"} | {"30代前半"} | {"総獲得報酬: 25,579,393 円"}
              </p>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat temporibus ab id, molestias exercitationem atque eaque
                non recusandae facilis! Aut, odio consequuntur eligendi nesciunt
                dolores provident recusandae ipsa voluptates quae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ratione in et, magnam enim eveniet nihil reprehenderit
                rem perferendis quaerat maxime odit saepe odio. Cupiditate
                tenetur odio nisi mollitia animi!
              </p>
            </div>
            <div className="column is-1 has-text-grey-light">2022/11/07</div>
          </div>
          <div>
            <p className="subtittle has-text-info has-text-centered">
              もっと見る{" "}
              <FontAwesomeIcon
                icon={["fas", "caret-down"]}
                className="icon is-small"
              />
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-5"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <p className="title is-5">料金表</p>
        <div>
          <div className="columns">
            <div className="column is-3">
              <PricelistCard imgSrc="/images/p1.png" imgAlt="P1" />
            </div>
            <div className="column is-3">
              <PricelistCard imgSrc="/images/p2.png" imgAlt="P2" />
            </div>
            <div className="column is-3">
              <PricelistCard imgSrc="/images/p3.png" imgAlt="P3" />
            </div>
            <div className="column is-3">
              <PricelistCard imgSrc="/images/p4.png" imgAlt="P4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
