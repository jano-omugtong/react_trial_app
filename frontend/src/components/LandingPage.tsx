import React, { Component } from "react";
import { Footer } from "./Common/Footer";
import { MainBody } from "./MainBody/MainBody";
import Navbar from "./Navigation/Navbar";
import { Sidebar } from "./Navigation/Sidebar";
export class LandingPage extends Component {
  render() {
    return (
      <div
        className="hero columns is-fullheight is-fullwidth desktop"
        style={{ flexDirection: "initial", margin: "0px" }}
      >
        <div
          className="column is-fullheight is-fullwidth is-2"
          style={{
            boxShadow: "-3px 0px 15px 0 #555",
            padding: "0px",
            position: "relative",
          }}
        >
          <Sidebar />
        </div>
        <div
          className="column hero is-fullheight is-fullwidth is-10"
          style={{
            flexDirection: "column",
            padding: "0px",
          }}
        >
          <Navbar fromLogin={false} />
          <MainBody />
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
