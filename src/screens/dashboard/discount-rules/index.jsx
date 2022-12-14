import { Edit2, Eye, Search, Trash2 } from "react-feather";

import { Link } from "router";
import { useLocation } from "react-router";

export default function Employees() {
  const location = useLocation();
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          Discount
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Create Discount
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
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
            Products Discount per..
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Delivery Discount per..
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
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
