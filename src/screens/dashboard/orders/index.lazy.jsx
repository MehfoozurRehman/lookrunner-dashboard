import {
  Avatar,
  TableEntryDeleteButton,
  TableEntryImage,
  TableEntryText,
  TableEntryViewButton,
} from "components";

import { Search } from "react-feather";
import clsx from "clsx";
import { useState } from "react";

export default function orders() {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabsList = [
    "All",
    "Customer Billed for Products",
    "Return Requested",
    "Trial In Process",
    "Delivery Made",
    "Booking Made",
  ];
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
          {tabsList.map((tab) => (
            <button
              key={tab}
              className={clsx(
                "container__main__content__listing__header__right__button__order",
                selectedTab === tab &&
                  "container__main__content__listing__header__right__button__order__active"
              )}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            images
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
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
        <TableEntryViewButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryImage
        className="container__main__content__listing__table__content__list__entry"
        style={{ gap: 10, flexWrap: "wrap" }}
      >
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
