import { Edit2, Eye, Search, Trash2 } from "react-feather";

import { Link } from "router";
import Select from "react-select";
import { useLocation } from "react-router";

export default function Employees() {
  const location = useLocation();
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Action
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Address
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Longitude
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Latitude
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.";
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <Link
          to={location.pathname + "/detail"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Eye size={20} color="currentColor" />
        </Link>
        <Link
          to={location.pathname + "/edit"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Edit2 size={20} color="currentColor" />
        </Link>
        <button className="container__main__content__listing__table__content__list__entry__button">
          <Trash2 size={20} color="currentColor" />
        </button>
      </div>

      <div className="container__main__content__listing__table__content__list__entry">
        john devved
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        +22-209384
      </div>

      <div className="container__main__content__listing__table__content__list__entry">
        johnn44@gmail.com
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        {description.length > 50 ? (
          <div className="container__main__content__listing__table__content__list__entry__details">
            <button className="container__main__content__listing__table__content__list__entry__details__button">
              View Details
            </button>
            <div className="container__main__content__listing__table__content__list__entry__details__content">
              {description}
            </div>
          </div>
        ) : (
          description
        )}
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        45463
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        34345
      </div>
    </div>
  );
}
