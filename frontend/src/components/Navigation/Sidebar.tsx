import React from "react";
import { useLocation, Link } from "react-router-dom";

import { AppLogo } from "../Common/AppLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = () => {
  const location = useLocation();
  const landing_page = "/landing";
  return (
    <aside className="menu">
      <p className="menu-label">
        <span>
          <AppLogo />
        </span>
      </p>
      <ul className="menu-list">
        <li>
          <Link to="/landing">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "truck-fast"]}
              className="fa-1x"
            />{" "}
            Search Shipping Rates
          </Link>
        </li>
      </ul>
      <span className="menu-label">
        <hr />
      </span>
      <ul className="menu-list">
        <li className={location.pathname === landing_page ? "sitewide-bg" : ""}>
          <Link to="/landing">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "circle-dot"]}
              className="fa-1x"
            />{" "}
            Dashboard
          </Link>
        </li>
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon icon={["fas", "ticket"]} className="fa-1x" /> XXXXX
          </a>
        </li>
      </ul>
      <span className="menu-label">
        <hr />
      </span>
      <ul className="menu-list">
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "circle-info"]}
              className="fa-1x"
            />{" "}
            Company Profile
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon icon={["fas", "gear"]} className="fa-1x" /> Company
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};
