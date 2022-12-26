import { Search } from "react-feather";
import { TableEntryText } from "components";

export default function StockReport() {
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
            Total Items
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Total Quantity
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Stock Value by Price
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Stock Value by Cost
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Profit Estimation
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
        </div>
      </div>
    </div>
  );
}
function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        23232
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        2323
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        65456
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        344
      </TableEntryText>
      <TableEntryText className="container__main__content__listing__table__content__list__entry">
        1212
      </TableEntryText>
    </div>
  );
}
