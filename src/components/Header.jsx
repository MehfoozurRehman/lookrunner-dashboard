import { ArrowLeft, ChevronDown, LogOut, Menu, User } from "react-feather";
import { Fragment, useEffect, useState } from "react";
import { sidebarEnteries, userAtom } from "../global";
import { useLocation, useNavigate } from "react-router-dom";

import Avatar from "./Avatar";
import ClickAwayListener from "react-click-away-listener";
import { Link } from "router";
import ThemeSwitch from "react-theme-switch-css";
import { useAtom } from "jotai";

export default function Header({ setSidebarOpen }) {
  const [profilePanelOpen, setProfilePanelOpen] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setProfilePanelOpen(false);
    });
  }, []);

  return (
    <div className="container__main__header">
      <div className="container__main__header__left">
        <button
          onClick={() => {
            setSidebarOpen(true);
          }}
          className="container__main__header__left__button container__main__header__left__button__menu"
        >
          <Menu size={20} color="currentColor" />
        </button>
        {sidebarEnteries
          .filter((entry) =>
            location.pathname === "/dashboard"
              ? entry.path === location.pathname
              : entry.path
                  .replace("/dashboard/")
                  .includes(
                    location.pathname.replace("/dashboard", "").split("/")[1]
                  )
          )
          .map((entry) => (
            <Fragment key={entry.path}>
              {location.pathname === "/dashboard" ? null : (
                <button
                  onClick={() => {
                    navigate(entry.backPath ? entry.backPath : -1);
                  }}
                  className="container__main__header__left__button"
                >
                  <ArrowLeft size={20} color="currentColor" />
                </button>
              )}
              <div className="container__main__header__left__icon">
                {entry.icon}
              </div>
            </Fragment>
          ))}
        {location.pathname === "/dashboard" ? (
          <div className="container__main__header__left__heading">
            {location.pathname.replace("/dashboard/", "").replace("/", "")}{" "}
          </div>
        ) : (
          <div className="container__main__header__left__heading">
            {location.pathname.replace("/dashboard/", "").replace("/", " -> ")}
          </div>
        )}
      </div>
      <div className="container__main__header__right">
        <div className="container__main__header__right__panel">
          <button
            className="container__main__header__right__panel__main"
            onClick={() => {
              setProfilePanelOpen(!profilePanelOpen);
            }}
          >
            <Avatar
              src={user?.profilePic}
              alt="user"
              className="container__main__header__right__panel__main__img"
            />
            <div className="container__main__header__right__panel__main__label">
              {user?.name.length > 20
                ? user?.name.substring(0, 20) + "..."
                : user?.name}
            </div>
            <ChevronDown size={20} color="currentColor" />
          </button>
          {profilePanelOpen && (
            <ClickAwayListener
              onClickAway={() => {
                setProfilePanelOpen(false);
              }}
            >
              <div className="container__main__header__right__panel__content">
                <Link
                  to="/dashboard/profile"
                  className="container__main__header__right__panel__content__entry"
                >
                  <User size={20} color="currentColor" />
                  Profile
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    setUser(null);
                  }}
                  replace={true}
                  className="container__main__header__right__panel__content__entry"
                >
                  <LogOut size={20} color="currentColor" />
                  Logout
                </Link>
              </div>
            </ClickAwayListener>
          )}
        </div>
        <div className="container__main__header__right__button">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
