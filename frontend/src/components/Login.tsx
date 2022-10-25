import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
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

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
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
                <div className="field mt-5">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className={
                        !email && msg === fillRequired
                          ? "input is-danger"
                          : "input"
                      }
                      placeholder="Username"
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
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    Login
                  </button>
                </div>
                <div className="block">
                  <button
                    type="button"
                    className="button is-link is-fullwidth"
                    onClick={() => navigate("/register")}
                  >
                    Create an Account?
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
