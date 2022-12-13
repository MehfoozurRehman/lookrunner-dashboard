import { ArrowLeft, Menu, X } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

import Avatar from "./Avatar";
import ThemeSwitch from "react-theme-switch-css";
import { avatar } from "../assets";
import { sidebarEnteries } from "../global";

export default function Header({ backPath, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
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
          .filter((entry) => entry.path === location.pathname)
          .map((entry) => (
            <>
              {location.pathname !== "/dashboard" && (
                <button
                  onClick={() => {
                    navigate(backPath ? backPath : -1);
                  }}
                  className="container__main__header__left__button"
                >
                  <ArrowLeft size={20} color="currentColor" />
                </button>
              )}
              <div className="container__main__header__left__icon">
                {entry.icon}
              </div>
            </>
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
          <button className="container__main__header__right__panel__main">
            <Avatar
              src={avatar}
              alt="user"
              className="container__main__header__right__panel__main__img"
            />
            <div className="container__main__header__right__panel__main__label">
              John Doe
            </div>
          </button>
        </div>
        <div className="container__main__header__right__button">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
