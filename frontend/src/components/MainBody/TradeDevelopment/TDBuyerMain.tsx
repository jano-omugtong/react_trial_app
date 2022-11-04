import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CertificateBadge } from "../../Common/CertificateBadge";
import { SpanWithCheckIcon } from "../../Common/SpanWithCheckIcon";

export const TDBuyerMain = () => {
  return (
    <div className="mx-2">
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
      <div
        className="content columns desktop"
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
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
                    | {"個人"} |
                    <span style={{ textDecoration: "underline" }}>
                      {"愛知県"}
                    </span>
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
              <tr>
                <td className="is-flex has-background-grey-light"></td>
              </tr>
              <tr>selection?</tr>
              <tr>Reviews</tr>
              <tr>Price list</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
