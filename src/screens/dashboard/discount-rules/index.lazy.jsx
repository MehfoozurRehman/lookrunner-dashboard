import {
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryText,
} from "components";

import DiscountPopup from "../../../components/DiscountPopup";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function DiscountRules() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  return (
    <>
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
            <button
              onClick={() => setShow(!show)}
              className="container__main__content__listing__header__right__button"
            >
              Create Discount
            </button>
          </div>
        </div>
        <div className="container__main__content__listing__table">
          <div className="container__main__content__listing__table__header">
            <div className="container__main__content__listing__table__header__entry">
              Actions
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
      {show ? <DiscountPopup setShow={setShow} /> : null}
    </>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <TableEntryText>Delivery Discount</TableEntryText>
      <TableEntryText>1212</TableEntryText>
      <TableEntryText>abc</TableEntryText>
      <TableEntryText>asas</TableEntryText>
      <TableEntryText>10%</TableEntryText>
      <TableEntryText>60%</TableEntryText>
    </div>
  );
}
