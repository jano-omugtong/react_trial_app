import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import apiAxios from "../../../../../../services/api";

export const RequestedProjectOffer: React.FC = () => {
  const location = useLocation();
  const projectId = location.state ? location.state.projectId : null;
  const navigate = useNavigate();

  const [desiredMargin, setDesiredMargin] = useState("");
  const [offerMessage, setOfferMessage] = useState("");

  const EnterOffer = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      // send to backend: parameter projectId (location.state.projectId)
      //   const response = await apiAxios.post("http://localhost:5000/dummy", {
      //     projectId,
      //     desiredMargin,
      //     offerMessage,
      //   });
      navigate("/trade_development/buyer/requested_project_list", {
        state: { status: "success" },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        let message =
          response && response.data.msg ? response.data.msg : error.message;
        console.log(message);
      }
    }
  };

  useEffect(() => {
    if (!projectId) {
      navigate("/trade_development/buyer/requested_project_list");
    }
  }, []);

  return (
    <div
      className="has-background-white m-5 box"
      style={{
        padding: "5rem",
      }}
    >
      <form onSubmit={EnterOffer}>
        <div className="field">
          <label className="label">希望するマージン％</label>
          <div className="control">
            <input
              className="input"
              style={{
                width: "auto",
              }}
              type="text"
              onChange={(e) => setDesiredMargin(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">メッセージ</label>
          <div className="control">
            <textarea
              className="textarea"
              onChange={(e) => setOfferMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div
          className="field is-flex is-justify-content-end"
          style={{ marginTop: "6rem" }}
        >
          <div className="control">
            <button className="button sitewide-bg">エントリーする</button>
          </div>
        </div>
      </form>
    </div>
  );
};
