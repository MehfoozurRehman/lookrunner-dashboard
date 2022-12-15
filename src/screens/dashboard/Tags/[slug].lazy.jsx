import { DetailsEntry } from "../../../components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function TagDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Name">Accountant</DetailsEntry>
        <DetailsEntry label="Description">
          User management, Order management User management, Order management
          User management, Order managementv
        </DetailsEntry>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
