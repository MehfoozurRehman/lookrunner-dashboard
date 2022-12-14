import { Link, NavLink } from "router";
import { sidebarCategories, sidebarEnteries } from "global";

import { Fragment } from "react";
import { X } from "react-feather";
import { logo } from "assets";

export default function Sidebar({ setSidebarOpen }) {
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <Link to="/dashboard" className="container__sidebar__logo">
          <img
            src={logo}
            alt="logo"
            className="container__sidebar__logo__img"
          />
        </Link>
        <button
          className="container__sidebar__button"
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          <X size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__sidebar__content">
        {sidebarCategories.map((category) => (
          <Fragment key={category}>
            {category === "" ? (
              sidebarEnteries
                .filter((entry) => entry.category === category)
                .map((entry) => (
                  <NavLink
                    key={entry.path}
                    onClick={() => {
                      if (window.innerWidth < 820) {
                        setSidebarOpen(false);
                      }
                    }}
                    end
                    to={entry.path}
                    className="container__sidebar__entry__content__entry"
                  >
                    <div className="container__sidebar__entry__content__entry__icon">
                      {entry.icon}
                    </div>
                    {entry.name}
                  </NavLink>
                ))
            ) : (
              <div className="container__sidebar__entry">
                <div className="container__sidebar__entry__label">
                  {category}
                </div>
                <div className="container__sidebar__entry__content">
                  {sidebarEnteries
                    .filter((entry) => entry.category === category)
                    .map((entry) => (
                      <NavLink
                        key={entry.path}
                        to={entry.path}
                        onClick={() => {
                          if (window.innerWidth < 820) {
                            setSidebarOpen(false);
                          }
                        }}
                        className="container__sidebar__entry__content__entry"
                      >
                        <div className="container__sidebar__entry__content__entry__icon">
                          {entry.icon}
                        </div>
                        {entry.name}
                      </NavLink>
                    ))}
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
