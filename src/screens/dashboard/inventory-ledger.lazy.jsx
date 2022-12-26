import { Search } from "react-feather";
import Select from "react-select";
import { TableEntryText } from "components";
import { useLocation } from "react-router-dom";

export default function InventoryLedger() {
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
          <div className="container__main__content__listing__table__header__entry">
            Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            User
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Warehouse
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Product name/code
          </div>
          <div className="container__main__content__listing__table__header__entry">
            SKU
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Quantity
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Operation
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
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText>10/10/22</TableEntryText>
      <TableEntryText>deved</TableEntryText>

      <TableEntryText>WH # 03</TableEntryText>
      <TableEntryText>a23</TableEntryText>
      <TableEntryText>abbs</TableEntryText>
      <TableEntryText>12</TableEntryText>
      <TableEntryText>Addition</TableEntryText>
    </div>
  );
}
