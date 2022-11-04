import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

import apiAxios from "../../services/api";
import { ConciergeBlock } from "../Common/ConciergeBlock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppLogo } from "../Common/AppLogo";

interface NavbarProps {
  fromLogin: boolean;
}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const getUsers = async () => {
    try {
      const response = await apiAxios.get("http://localhost:5000/usersa", {});
      console.log(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        let message =
          response && response.data.msg ? response.data.msg : error.message;
        console.log(message);
      }
    }
  };

  const Logout = async () => {
    try {
      await apiAxios.delete("http://localhost:5000/logout");

      ReactSession.remove("user_name");
      ReactSession.remove("session_exp");
      ReactSession.remove("user_img_src");

      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        let message = response ? response.data.msg : error.message;
        console.log(message);
      }
    }
  };

  return (
    <nav
      className="navbar sticky"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className="navbar-brand bg-white"
        style={{
          boxShadow: props.fromLogin ? "" : "15px 1px 15px 0px #555",
        }}
      >
        {props.fromLogin ? <AppLogo /> : null}

        <span
          role="button"
          className={
            showMenu ? "navbar-burger burger is-active" : "navbar-burger burger"
          }
          aria-label="menu"
          aria-expanded={showMenu}
          data-target="navbarBasicExample"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      {props.fromLogin ? (
        <div
          id="navbarBasicExample"
          className={
            showMenu ? "navbar-menu is-white is-active" : "navbar-menu is-white"
          }
        >
          <div className="navbar-end">
            <div className="navbar-item is-justify-content-center">
              <span
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "gray",
                  borderRadius: "20px",
                }}
              ></span>
              <div className="navbar-item">マイページ</div>
              <div className="navbar-item">設定</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="navbarBasicExample"
          className={
            showMenu ? "navbar-menu bg-white is-active" : "navbar-menu bg-white"
          }
          style={{
            boxShadow: showMenu ? "none" : "15px 1px 15px 0px #555",
          }}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons mt-1">
                <button
                  className={`button is-white mx-1 ${
                    showMenu ? "is-small" : ""
                  }`}
                  onClick={getUsers}
                >
                  <span title="Badge top right" className="badge is-success">
                    8
                  </span>
                  <FontAwesomeIcon icon={["fas", "inbox"]} />
                </button>
                <button
                  className={`button is-white mx-1 ${
                    showMenu ? "is-small" : ""
                  }`}
                  // onClick={Logout}
                >
                  <span title="Badge top right" className="badge is-danger">
                    8
                  </span>
                  <FontAwesomeIcon icon={["fas", "bell"]} />
                </button>
              </div>
            </div>
            <div className="navbar-item">
              <ConciergeBlock
                userName={ReactSession.get("user_name")}
                companyName="AWS"
                imgSrc={
                  process.env.PUBLIC_URL +
                  `/${ReactSession.get("user_img_src")}`
                }
                isOnline={true}
              />
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-white has-tooltip-bottom fa-layers"
                  data-tooltip="Help"
                  // onClick={Logout}
                >
                  <FontAwesomeIcon icon={["fas", "circle"]} />
                  <FontAwesomeIcon icon={["fas", "question-circle"]} inverse />
                </button>
                <button
                  className="button is-white has-tooltip-bottom mr-0 px-0"
                  data-tooltip="Languages"
                >
                  <span
                    className="fa-layers mr-1"
                    // onClick={Logout}
                  >
                    <FontAwesomeIcon icon={["fas", "circle"]} />
                    <FontAwesomeIcon icon={["fas", "globe"]} inverse />
                  </span>
                  <p>EN</p>
                </button>
                <button
                  className="button is-white has-tooltip-bottom"
                  data-tooltip="Logout"
                  onClick={Logout}
                >
                  <FontAwesomeIcon icon={["fas", "right-from-bracket"]} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
