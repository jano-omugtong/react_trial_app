import React from "react";

export const ProfileSelection: React.FC = () => {
  return (
    <>
      <div className="has-text-centered my-5 profile-page-margin-x">
        <div className="columns">
          <div className="column">
            <p className="title is-6">自己紹介</p>
          </div>
          <div className="column">
            <p className="title is-6">料金表</p>
          </div>
          <div className="column">
            <p className="title is-6">実績・評価</p>
          </div>
          <div className="column">
            <p className="title is-6">経歴</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: "0",
          backgroundColor: "lightgrey",
        }}
      />
    </>
  );
};
