import { Link, NavLink } from "router";

import { logo } from "../assets";
import { sidebarEnteries } from "../global";

export default function Sidebar() {
  const sidebarCategories = ["", "User Management", "Order Management"];

  return (
    <div className="container__sidebar">
      <Link path="/dashboard" className="container__sidebar__logo">
        <img src={logo} alt="logo" className="container__sidebar__logo__img" />
      </Link>
      <div className="container__sidebar__content">
        {sidebarCategories.map((category) =>
          category === "" ? (
            sidebarEnteries
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <NavLink
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
              <div className="container__sidebar__entry__label">{category}</div>
              <div className="container__sidebar__entry__content">
                {sidebarEnteries
                  .filter((entry) => entry.category === category)
                  .map((entry) => (
                    <NavLink
                      to={entry.path}
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
          )
        )}
      </div>
    </div>
  );
}
