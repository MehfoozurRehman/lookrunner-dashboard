import { DetailsEntry } from "../../../components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function WarehouseDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Name">Abrar</DetailsEntry>

        <DetailsEntry label="Phone">+33-03948567</DetailsEntry>
        <DetailsEntry label="Email Address">iabrar@gmail.com</DetailsEntry>
        <DetailsEntry label="Latitude">Accountant</DetailsEntry>
        <DetailsEntry label="Longitude"></DetailsEntry>
        <DetailsEntry label="Address"></DetailsEntry>
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
