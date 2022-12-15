import { Edit2, Eye, Search, Trash2 } from "react-feather";

import { Link } from "router";
import { useLocation } from "react-router";

export default function DiscountRules() {
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
            Create Discount
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Action
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Type
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Code
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Products purchased
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Products Discount %
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Delivery Discount %
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
        Delivery Discount
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        1212
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        abc
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        asas
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        10%
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        60%
      </div>
    </div>
  );
}
