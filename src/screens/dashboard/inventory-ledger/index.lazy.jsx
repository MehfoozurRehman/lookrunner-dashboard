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
            />
            <Select
              options={[
                { value: "Role", label: "Role" },
                { value: "Department", label: "Department" },
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
            />
          </div>
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
            Action
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
            Mobile No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Referred By
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Department
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Username
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Role
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
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
      <TableEntryText>deved</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>
      <TableEntryText>+92-20395731</TableEntryText>
      <TableEntryText>asm232@gmail.com</TableEntryText>
      <TableEntryText>arsii</TableEntryText>
      <TableEntryText>Horticulture</TableEntryText>
      <TableEntryText>asaaam</TableEntryText>
    </div>
  );
}
