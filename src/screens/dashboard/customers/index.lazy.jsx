import {
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryStatus,
  TableEntryText,
  TableEntryViewButton,
} from "components";

import { Link } from "router";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";

export default function Customers() {
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
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            First Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Last Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Zip Code
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Orders
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
        </div>
      </div>
    </div>
  );
}
function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryViewButton />
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryStatus />
      <TableEntryText>john</TableEntryText>
      <TableEntryText>Deved</TableEntryText>
      <TableEntryText>asmm@gmail.com</TableEntryText>
      <TableEntryText>+92-20039394</TableEntryText>
      <TableEntryText>3494</TableEntryText>
      <TableEntryText>9</TableEntryText>
    </div>
  );
}
