import { Eye } from "react-feather";
import { Link } from "router";

export default function TableEntryViewButton({ ...props }) {
  return (
    <Link
      {...props}
      to={location.pathname.toLowerCase() + "/detail"}
      className="container__main__content__listing__table__content__list__entry__button"
    >
      <Eye size={20} color="currentColor" />
    </Link>
  );
}
