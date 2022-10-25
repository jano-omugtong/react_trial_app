import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const fillRequired = "Please fill required fields";

  const Auth = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      try {
        await axios.post("http://localhost:5000/login", {
          email: email,
          password: password,
        });
        navigate("/dashboard");
      } catch (error) {
        let message;
        if (error instanceof AxiosError) {
          const { response } = error;
          message = response ? response.data.msg : error.message;
        } else {
          message = String(error);
        }
        setMsg(message);
      }
    } else {
      setMsg(fillRequired);
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <Navbar fromLogin={true} />
      <div
        style={{
          margin: "50px",
        }}
      >
        <section className="hero has-background-info-light is-fullheight is-fullwidth">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-4-desktop">
                  <form onSubmit={Auth} className="box">
                    <p
                      className={
                        msg
                          ? "has-text-centered notification is-narrow is-danger"
                          : ""
                      }
                    >
                      {msg ? (
                        <button
                          className="delete"
                          onClick={() => setMsg("")}
                        ></button>
                      ) : null}
                      {msg}
                    </p>
                    <div className="has-text-centered">
                      <p
                        style={{
                          fontSize: "x-large",
                        }}
                      >
                        <strong>ログイン</strong>
                      </p>
                    </div>
                    <div className="field mt-5">
                      <label className="label">ID (メールアドレス)</label>
                      <div className="controls">
                        <input
                          type="text"
                          className={
                            !email && msg === fillRequired
                              ? "input is-danger"
                              : "input"
                          }
                          placeholder="sample@sample.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field mt-5">
                      <label className="label">パスワード</label>
                      <div className="controls">
                        <input
                          type={passwordType}
                          className={
                            !password && msg === fillRequired
                              ? "input is-danger"
                              : "input"
                          }
                          placeholder="******"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <input
                        type="checkbox"
                        name="toggle_password"
                        id="toggle_password"
                        onClick={() => togglePassword()}
                      />
                      <span style={{ fontSize: "small" }}>
                        {" "}
                        パスワードを表示する
                      </span>
                    </div>
                    <div className="field mt-5 has-text-centered">
                      <button
                        type="submit"
                        style={{ width: "200px" }}
                        className="button is-info"
                      >
                        ログイン
                      </button>
                    </div>
                    <div
                      className="box has-text-centered"
                      style={{
                        backgroundColor: "lightgray",
                      }}
                    >
                      <p className="is-size-7">
                        仮パスワードの有効期限が切れた方・
                      </p>
                      <p className="is-size-7">
                        パスワードを忘れた方・変更したい方は
                        <Link to={"/register"} className="is-underlined">
                          こちら
                        </Link>
                      </p>
                    </div>
                    <hr />
                    <div className="field has-text-centered">
                      <span
                        style={{
                          verticalAlign: "middle",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faBriefcase as IconProp}
                          width="60"
                          className="icon is-small has-text-warning mx-2"
                        />
                      </span>
                      <span>
                        <Link
                          to={"/agentLogin"}
                          className="is-size-7 is-underlined"
                        >
                          エージェント側ログイン画面はこちら
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
