import React, { Component } from "react";

export class MainBodyNavCard extends Component {
  render() {
    return (
      <div
        className="card"
        style={{
          width: "50%",
        }}
      >
        <div className="card-content">
          <p className="title">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on <a href="/">Twitter</a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="/">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default MainBodyNavCard;
