import React from "react";
import { useLocation, Link } from "react-router-dom";

import { AppLogo } from "../Common/AppLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const landing_page = "/landing";
  const td_buyer_page = "/trade_development/buyer";
  const td_seller_page = "/trade_development/seller";
  const td_b_RequestedProj_pages = "requested_project";
  const td_b_PendingEntryList_page =
    "/trade_development/buyer/pending_entry_list";
  return (
    <aside className="menu">
      <p className="menu-label">
        <span>
          <AppLogo />
        </span>
      </p>
      <ul className="menu-list">
        <li>
          <Link to="/landing">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "truck-fast"]}
              className="fa-1x"
            />{" "}
            Search Shipping Rates
          </Link>
        </li>
      </ul>
      <span className="menu-label">
        <hr className="sidebar-hr" />
      </span>
      <ul className="menu-list">
        <li
          className={
            location.pathname.includes(landing_page) ? "sitewide-orange-bg" : ""
          }
        >
          <Link to="/landing">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "circle-dot"]}
              className="fa-1x"
            />{" "}
            Dashboard
          </Link>
        </li>
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon icon={["fas", "ticket"]} className="fa-1x" /> XXXXX
          </a>
        </li>
      </ul>
      <span className="menu-label">
        <hr className="sidebar-hr" />
      </span>
      <ul className="menu-list">
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "circle-info"]}
              className="fa-1x"
            />{" "}
            Company Profile
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <FontAwesomeIcon icon={["fas", "gear"]} className="fa-1x" /> Company
            Settings
          </a>
        </li>
      </ul>
      {location.pathname.includes(td_buyer_page) ? (
        <>
          <span className="menu-label">
            <hr className="sidebar-hr" />
          </span>
          <ul className="menu-list menu-list-sub">
            <li>
              <Link
                to="/trade_development/buyer/pending_entry_list"
                className={
                  location.pathname.includes(td_b_PendingEntryList_page)
                    ? "sitewide-orange-color"
                    : ""
                }
              >
                エントリー中の依頼一覧
              </Link>
            </li>
            <li>
              <Link
                to="/trade_development/buyer/requested_project_list"
                className={
                  location.pathname.includes(td_b_RequestedProj_pages)
                    ? "sitewide-orange-color"
                    : ""
                }
              >
                依頼された案件一覧
              </Link>
            </li>
            <li>
              <a href="/">セラー探し中の案件</a>
              <ul>
                <li>
                  <a>新規作成</a>
                </li>
                <li>
                  <a>案件一覧</a>
                </li>
              </ul>
            </li>
          </ul>
        </>
      ) : null}
      {location.pathname.includes(td_seller_page) ? (
        <>
          <span className="menu-label">
            <hr className="sidebar-hr" />
          </span>
          <ul className="menu-list menu-list-sub">
            <li>
              <a href="/">新規プロジェクト作成</a>
              <ul>
                <li>
                  <a>会社情報登録</a>
                </li>
                <li>
                  <a>商品情報登録</a>
                </li>
                <li>
                  <a>案件詳細作成</a>
                </li>
                <li>
                  <a>コンシェルジュ選択</a>
                </li>
                <li>
                  <a>依頼</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">コンシェルジュエントリー一覧</a>
              <ul>
                <li>
                  <a>発注</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">お気に入りのコンシェルジュ一覧</a>
            </li>
            <li>
              <a href="/">案件一覧　(エントリー中、進行中)</a>
            </li>
            <li>
              <a href="/">セラー探し中の案件一覧</a>
            </li>
          </ul>
        </>
      ) : null}
    </aside>
  );
};
