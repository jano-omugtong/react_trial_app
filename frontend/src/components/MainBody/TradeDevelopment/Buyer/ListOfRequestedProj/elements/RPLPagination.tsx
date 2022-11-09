import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RPLPagination: React.FC = () => {
  return (
    <nav
      className="pagination is-small"
      role="navigation"
      aria-label="pagination"
    >
      <button className="button pagination-previous mx-0">
        <FontAwesomeIcon
          icon={["fas", "arrow-left"]}
          className="icon is-size-7 has-text-info mr-2"
        />
        前へ
      </button>
      <button className="button pagination-next mx-0">
        次へ
        <FontAwesomeIcon
          icon={["fas", "arrow-right"]}
          className="icon is-size-7 has-text-info ml-2"
        />
      </button>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  );
};
