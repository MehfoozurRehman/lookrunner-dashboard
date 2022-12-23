import { TableEntryText } from "components";

import { Search } from "react-feather";

export default function Stock() {
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
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Product Code
          </div>
          <div className="container__main__content__listing__table__header__entry">
            SKU
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Opening Balance
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Qty in Warehouse
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Qty in Trial
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Qty Sold
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Ending Balance
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
      <TableEntryText>121</TableEntryText>
      <TableEntryText>“Crosby Green Crochet Sweater - Medium”</TableEntryText>

      <TableEntryText>121</TableEntryText>
      <TableEntryText>3</TableEntryText>
      <TableEntryText>45</TableEntryText>
      <TableEntryText>23</TableEntryText>
      <TableEntryText>45000</TableEntryText>
    </div>
  );
}
