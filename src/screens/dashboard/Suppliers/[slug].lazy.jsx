import { DetailsEntry } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function SupplierDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Company">Hello Pakistsan</DetailsEntry>
        <DetailsEntry label="Brand name">Stylo</DetailsEntry>
        <DetailsEntry label="Vat number">+12345678</DetailsEntry>
        <DetailsEntry label="Email Address">irsii444@gmail.com</DetailsEntry>
        <DetailsEntry label="Phone no.">+93 546 45667654</DetailsEntry>
        <DetailsEntry label="Address">streat #3 House no.21</DetailsEntry>
        <DetailsEntry label="City">Lahore</DetailsEntry>
        <DetailsEntry label="State">Punjab</DetailsEntry>
        <DetailsEntry label="Postal code">37000</DetailsEntry>
        <DetailsEntry label="Company description"></DetailsEntry>
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
