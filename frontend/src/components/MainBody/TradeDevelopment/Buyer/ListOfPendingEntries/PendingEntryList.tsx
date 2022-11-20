import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PendingEntryList: React.FC = () => {
  return (
    <div
      className="box is-fullwidth is-fullheight"
      style={{
        margin: "30px",
      }}
    >
      <p className="title is-6 sitewide-orange-color">
        エントリー中のプロジェクト
      </p>
      <div className="columns">
        <div className="column is-8 field has-addons">
          <p className="control">
            <span className="button sitewide-orange-border is-size-7">
              View All
            </span>
          </p>
          <p className="control">
            <span className="button sitewide-orange-border is-size-7">New</span>
          </p>
          <p className="control">
            <span className="button sitewide-orange-border is-size-7">
              Awaiting Approval
            </span>
          </p>
          <p className="control">
            <span className="button sitewide-orange-border is-size-7">
              Complete
            </span>
          </p>
          <p className="control">
            <span className="button sitewide-orange-border is-size-7">
              Canceled
            </span>
          </p>
        </div>
        <div className="column is-4 field">
          <p className="control has-icons-right">
            <input
              className="input is-small"
              type="text"
              placeholder="search"
            />
            <span className="icon is-small is-right sitewide-orange-color">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </span>
          </p>
        </div>
      </div>
      <table className="table is-small">
        <thead>
          <tr>
            <th className="is-size-7">Project Name</th>
            <th className="is-size-7">Entry Date</th>
            <th className="is-size-7">Country</th>
            <th className="is-size-7">Margins</th>
            <th className="is-size-7">Comment</th>
            <th className="is-size-7">Status</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
