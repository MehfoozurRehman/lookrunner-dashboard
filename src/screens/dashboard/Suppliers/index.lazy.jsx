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
import { useLocation } from "react-router";

export default function Suppliers() {
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
            Action
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Company
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Brand name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Tax ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Mobile
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Address
          </div>
          <div className="container__main__content__listing__table__header__entry">
            City
          </div>
          <div className="container__main__content__listing__table__header__entry">
            State
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Postal code
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Description
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
      <TableEntryText>comeers</TableEntryText>
      <TableEntryText>Hello Brand</TableEntryText>
      <TableEntryText>12344</TableEntryText>
      <TableEntryText>asmcompan@gmail.com</TableEntryText>
      <TableEntryText>+92-20039394</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>
      <TableEntryText>Lhr</TableEntryText>
      <TableEntryText>khaber</TableEntryText>
      <TableEntryText>30999</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>
    </div>
  );
}
