import { Avatar, TableEntryText } from "components";

import { Search } from "react-feather";
import Select from "react-select";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export default function Inventoryadjustment() {
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
          <div className="container__main__content__listing__header__left__filter">
            <Select
              options={[
                { value: "Warehouse ", label: "Warehouse" },
                { value: "Warehouse 1", label: "Warehouse  1" },
                { value: "Warehouse 2", label: "Warehouse  2" },
                { value: "Warehouse 3", label: "Warehouse  3" },
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
              placeholder="Warehouse"
            />
          </div>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div
            className="container__main__content__listing__table__header__entry"
            style={{ width: "200px" }}
          >
            Product
          </div>
          <div className="container__main__content__listing__table__header__entry">
            SKU
          </div>
          <div className="container__main__content__listing__table__header__entry">
            State
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Warehouse
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Available Qty
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
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText style={{ width: "200px" }}>
        <Avatar className="container__main__content__listing__table__content__list__entry__img" />
        <div
          style={{
            padding: "0px 18px",
            textAlign: "left",
          }}
          className="container__main__content__listing__table__content__list__entry__img__wraper"
        >
          <div
            style={{
              fontWeight: "700",
              fontSize: "12px",
            }}
            className="container__main__content__listing__table__content__list__entry__img__heading"
          >
            RBM-102
          </div>
          <div
            style={{
              paddingTop: "4px",
              fontSize: "12px",
            }}
            className="container__main__content__listing__table__content__list__entry__img__heading"
          >
            XS
          </div>
        </div>
      </TableEntryText>
      <TableEntryText>Crosby Green Crochet Sweater - Small</TableEntryText>
      <TableEntryText>in Stock</TableEntryText>
      <TableEntryText>Lahore</TableEntryText>
      <ClickAwayListener
        onClickAway={() => {
          setOpen(false);
        }}
      >
        <TableEntryText>
          {open && (
            <div className="container__main__content__listing__table__content__list__entry__special__panel">
              <label htmlFor="">Adjust by</label>
              <input
                type="number"
                placeholder="0"
                className="container__main__content__listing__table__content__list__entry__special__panel__input"
              />
              <label htmlFor="">Reason</label>
              <select
                name=""
                id=""
                className="container__main__content__listing__table__content__list__entry__special__panel__input"
              >
                <option value="">Correction</option>
                <option value="">Count</option>
                <option value="">Recieved</option>
                <option value="">Return restock</option>
                <option value="">Damaged</option>
                <option value="">Theft or loss</option>
                <option value="">Promotion or donation</option>
              </select>
            </div>
          )}
          <input
            type="number"
            placeholder="0"
            onFocus={() => {
              setOpen(true);
            }}
          />
          <button
            className="container__main__content__listing__table__content__list__entry__special__button"
            onClick={() => {
              setOpen(false);
            }}
          >
            Save
          </button>
        </TableEntryText>
      </ClickAwayListener>
    </div>
  );
}
