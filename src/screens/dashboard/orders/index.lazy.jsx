import {
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  TableEntryStatus,
  TableEntryText,
  TableEntryViewButton,
} from "components";

import { Link } from "router";
import { Search } from "react-feather";
import Select from "react-select";
import { useLocation } from "react-router";
import Avatar from "../../../components/Avatar";
import TableEntryImage from "../../../components/TableEntryImage";

export default function orders() {
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
            to={location.pathname.toLowerCase() + "/all"}
            className="container__main__content__listing__header__right__button__order"
          >
            All
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/"}
            className="container__main__content__listing__header__right__button__order"
          >
            Customer Billed for Products
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/all"}
            className="container__main__content__listing__header__right__button__order"
          >
            Return Requested
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/all"}
            className="container__main__content__listing__header__right__button__order"
          >
            Trial In Process
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/all"}
            className="container__main__content__listing__header__right__button__order"
          >
            Delivery Made
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/all"}
            className="container__main__content__listing__header__right__button__order"
          >
            Booking Made
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Action
          </div>
          <div className="container__main__content__listing__table__header__entry">
            images
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Oder Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Mobile No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Items
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Payment
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
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryImage
        className="container__main__content__listing__table__content__list__entry"
        style={{ gap: 10, flexWrap: "wrap" }}
      >
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
      </TableEntryImage>
      <TableEntryText>123456789</TableEntryText>
      <TableEntryText>11/12/22</TableEntryText>
      <TableEntryText>qasim</TableEntryText>

      <TableEntryText>+123234560</TableEntryText>
      <TableEntryText>6</TableEntryText>
      <TableEntryText>Delivery Made</TableEntryText>
      <TableEntryText>Payment Pending</TableEntryText>
    </div>
  );
}
