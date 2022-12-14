import { Edit2, Eye, Search, Trash2 } from "react-feather";

import { Link } from "router";
import Select from "react-select";
import { useLocation } from "react-router";

export default function Employees() {
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
                { value: "Department", label: "Department" },
                { value: "Role", label: "Role" },
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
            to={location.pathname + "/add"}
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
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.";
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <Link
          to={location.pathname + "/detail"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Eye size={20} color="currentColor" />
        </Link>
        <Link
          to={location.pathname + "/edit"}
          className="container__main__content__listing__table__content__list__entry__button"
        >
          <Edit2 size={20} color="currentColor" />
        </Link>
        <button className="container__main__content__listing__table__content__list__entry__button">
          <Trash2 size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        <Select
          options={[
            {
              value: "Active",
              label: "Active",
            },
            {
              value: "Deactivate",
              label: "Deactivate",
            },
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
      <div className="container__main__content__listing__table__content__list__entry">
        john
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        deved
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        {description.length > 50 ? (
          <div className="container__main__content__listing__table__content__list__entry__details">
            <button className="container__main__content__listing__table__content__list__entry__details__button">
              View Details
            </button>
            <div className="container__main__content__listing__table__content__list__entry__details__content">
              {description}
            </div>
          </div>
        ) : (
          description
        )}
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        +92-20395731
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        asm232@gmail.com
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        arsii
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Horticulture
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        asaaam
      </div>
    </div>
  );
}
