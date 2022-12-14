import { Edit2, Eye, Search, Trash2 } from "react-feather";

import { Avatar } from "components";
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
            to={location.pathname.toLowerCase() + "/add"}
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
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Supplier
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Brand
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Category
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Sub-Category
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Tag
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Cost of unit
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Selling price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Discounted price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Variants
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Images
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
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <Link
          to={location.pathname.toLowerCase() + "/detail"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Eye size={20} color="currentColor" />
        </Link>
        <Link
          to={location.pathname.toLowerCase() + "/edit"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Edit2 size={20} color="currentColor" />
        </Link>
        <button className="container__main__content__listing__table__content__list__entry__button">
          <Trash2 size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        <Select
          options={[
            {
              value: "Active",
              label: "Active",
            },
            {
              value: "Deactive",
              label: "Deactive",
            },
          ]}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary75: "#2a5e59",
              primary25: "#2a5e595e",
              primary50: "#2a5e595e",
              primary: "#2a5e59",
            },
          })}
        />
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        john
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Deved
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        stylo
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        knitted cloths
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        kindom
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        absd
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        34000
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        12356
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        20
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        30
      </div>
      <div
        className="container__main__content__listing__table__content__list__entry"
        style={{ gap: 10, flexWrap: "wrap" }}
      >
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
      </div>
    </div>
  );
}
