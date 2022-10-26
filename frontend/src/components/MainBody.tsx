import React, { Component } from "react";
import MainBodyNavCard from "./MainBodyNavCard";

export class MainBody extends Component {
  render() {
    return (
      <div
        className="has-background-light"
        style={{
          height: "100%",
        }}
      >
        <div
          className="columns desktop"
          style={{
            height: "100%",
            alignItems: "center",
            //   justifyContent: "center",
          }}
        >
          <div className="column is-6">
            <div
              className="hero"
              style={{
                height: "100%",
                flexDirection: "row-reverse",
              }}
            >
              <MainBodyNavCard />
            </div>
          </div>
          <div className="column is-6">
            <div
              className="hero"
              style={{
                height: "100%",
              }}
            >
              <MainBodyNavCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
