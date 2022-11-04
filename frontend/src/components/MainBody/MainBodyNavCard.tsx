import React from "react";
import { Link } from "react-router-dom";

import store from "../../services/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MainBody.css";

interface MainBodyNavCardProps {
  icon: string;
  label: string;
  description?: string;
  link: string;
  selection?: string;
}

export const MainBodyNavCard = (props: MainBodyNavCardProps) => {
  const selection: string = props.selection ?? "dummy";

  return (
    <div
      className="card"
      style={{
        width: "100%",
      }}
    >
      <div className="card-image">
        <figure className="image mt-3 has-text-centered">
          {props.icon === "dolly" ? (
            <FontAwesomeIcon
              icon={["fas", "dolly-box"]}
              className="fa-8x icon-color"
            />
          ) : props.icon === "ship" ? (
            <FontAwesomeIcon
              icon={["fas", "ship"]}
              className="fa-8x icon-color"
            />
          ) : (
            <FontAwesomeIcon
              icon={["fas", "circle-user"]}
              className="fa-8x icon-color"
            />
          )}
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <div className="media">
          <div className="media-content custom-media-content">
            <p className="title is-4">{props.label}</p>
            <p className="subtitle is-6">
              {props.description ?? "Details listed here"}
            </p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <button className="button button-color">
            <Link
              to={props.link}
              className="title is-5 button-link"
              onClick={() => {
                store.selection_page = selection;
              }}
            >
              Select
            </Link>
          </button>
        </p>
      </footer>
    </div>
  );
};
