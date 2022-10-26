import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppLogo } from "./AppLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConciergeBlock } from "./ConciergeBlock";

interface NavbarProps {
  fromLogin: boolean;
}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={props.fromLogin ? "navbar" : "navbar is-light"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {props.fromLogin ? <AppLogo /> : null}

          <span
            role="button"
            className={
              showMenu
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
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
            className={showMenu ? "navbar-menu is-active" : "navbar-menu"}
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
            className={showMenu ? "navbar-menu is-active" : "navbar-menu"}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button
                    className="button is-white mx-1"
                    // onClick={Logout}
                  >
                    <span title="Badge top right" className="badge is-success">
                      8
                    </span>
                    <FontAwesomeIcon
                      icon={["fas", "inbox"]}
                      className="fa-xl"
                    />
                  </button>
                  <button
                    className="button is-white mx-1"
                    // onClick={Logout}
                  >
                    <span title="Badge top right" className="badge is-danger">
                      8
                    </span>
                    <FontAwesomeIcon icon={["fas", "bell"]} className="fa-xl" />
                  </button>
                </div>
              </div>
              <div className="navbar-item">
                <ConciergeBlock />
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <button
                    className="button is-white has-tooltip-bottom fa-layers"
                    data-tooltip="Help"
                    // onClick={Logout}
                  >
                    <FontAwesomeIcon
                      icon={["fas", "circle"]}
                      className="fa-xl"
                    />
                    <FontAwesomeIcon
                      icon={["fas", "question-circle"]}
                      inverse
                      className="fa-xl"
                    />
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
      </div>
    </nav>
  );
};

export default Navbar;
