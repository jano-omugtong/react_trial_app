import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import store from "../../../../../../services/store";

interface RPLPaginationProps {
  totalPages: number;
  currentPage: number;
}

export const RPLPagination: React.FC<RPLPaginationProps> = (props) => {
  const total_pages: number = props.totalPages;
  const current_page: number = props.currentPage;
  const navigate = useNavigate();

  const navigateToChosenPage = (gotoPage: number): void => {
    store.requested_proj_list_current_page = gotoPage;
    navigate("/trade_development/buyer/requested_project_list");
  };

  return (
    <nav
      className="pagination is-small"
      role="navigation"
      aria-label="pagination"
    >
      <button
        className="button pagination-previous mx-0"
        disabled={current_page === 1}
        onClick={() => {
          navigateToChosenPage(current_page - 1);
        }}
      >
        <FontAwesomeIcon
          icon={["fas", "arrow-left"]}
          className="icon is-size-7 has-text-info mr-2"
        />
        前へ
      </button>
      <button
        className="button pagination-next mx-0"
        disabled={total_pages === current_page}
        onClick={() => {
          navigateToChosenPage(current_page + 1);
        }}
      >
        次へ
        <FontAwesomeIcon
          icon={["fas", "arrow-right"]}
          className="icon is-size-7 has-text-info ml-2"
        />
      </button>
      <ul className="pagination-list">
        {total_pages > 1 && current_page > 2 ? (
          <li>
            <Link
              to=""
              className="pagination-link"
              aria-label="Goto page 1"
              onClick={() => {
                navigateToChosenPage(1);
              }}
            >
              1
            </Link>
          </li>
        ) : null}
        {total_pages > 5 && current_page > 3 ? (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        ) : null}
        {total_pages > 1 && current_page > 1 ? (
          <li>
            <Link
              to=""
              className="pagination-link"
              aria-label={`Goto page ${current_page - 1}`}
              onClick={() => {
                navigateToChosenPage(current_page - 1);
              }}
            >
              {current_page - 1}
            </Link>
          </li>
        ) : null}
        {total_pages && current_page ? (
          <li>
            <Link
              to=""
              className="pagination-link is-current"
              aria-label={`Page ${current_page}`}
              aria-current="page"
            >
              {current_page}
            </Link>
          </li>
        ) : null}
        {total_pages > current_page ? (
          <li>
            <Link
              to=""
              className="pagination-link"
              aria-label={`Goto page ${current_page + 1}`}
              onClick={() => {
                navigateToChosenPage(current_page + 1);
              }}
            >
              {current_page + 1}
            </Link>
          </li>
        ) : null}

        {total_pages > current_page + 2 ? (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        ) : null}
        {total_pages > current_page + 1 ? (
          <li>
            <Link
              to=""
              className="pagination-link"
              aria-label={`Goto page ${total_pages}`}
              onClick={() => {
                navigateToChosenPage(total_pages);
              }}
            >
              {total_pages}
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
