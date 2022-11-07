import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const fillRequired = "Please fill required fields";

  const RegisterAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name && email && password && confPassword) {
      try {
        await axios.post("http://localhost:5000/users", {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
        });
        navigate("/");
      } catch (error: unknown) {
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

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={RegisterAccount} className="box">
                <p
                  className={
                    msg ? "has-text-centered notification is-danger" : ""
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
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className={
                        !name && msg === fillRequired
                          ? "input is-danger"
                          : "input"
                      }
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className={
                        !email && msg === fillRequired
                          ? "input is-danger"
                          : "input"
                      }
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
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
                </div>
                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className={
                        !confPassword && msg === fillRequired
                          ? "input is-danger"
                          : "input"
                      }
                      placeholder="******"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5 has-text-centered">
                  <div className="columns">
                    <div className="column is-3">
                      <button
                        type="button"
                        className="button is-primary is-inverted is-fullwidth"
                        onClick={() => navigate("/")}
                      >
                        <FontAwesomeIcon icon={faLeftLong as IconProp} />
                        <p className="ml-2">Login</p>
                      </button>
                    </div>
                    <div className="column is-9">
                      <button
                        type="submit"
                        className="button is-success is-fullwidth"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
