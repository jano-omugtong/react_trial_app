import React, { Component } from "react";
import { Footer } from "./Footer";
import MainBody from "./MainBody";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export class LandingPage extends Component {
  render() {
    return (
      <div
        className="hero columns is-fullheight is-fullwidth desktop"
        style={{ flexDirection: "initial" }}
      >
        <div
          className="column is-fullheight is-fullwidth is-2"
          style={{
            boxShadow: "-3px -15px 15px 0 #555",
          }}
        >
          <Sidebar />
        </div>
        <div
          className="column hero is-fullheight is-fullwidth is-10"
          style={{
            flexDirection: "column",
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
