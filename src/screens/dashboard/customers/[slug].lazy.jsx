import { DetailsEntry } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function CustomerDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <div
          className="container__main__content__details__heading"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "7px",
            width: "50%",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          Customer Names
        </div>
        <DetailsEntry label="First Name">asasasa</DetailsEntry>
        <DetailsEntry label="Last Name">AAsmm</DetailsEntry>
        <DetailsEntry label="Mobile No.">+33-03948567</DetailsEntry>
        <DetailsEntry label="Email Address">asmm333@gmail.com</DetailsEntry>
        <div
          className="container__main__content__details__heading"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "7px",
            width: "50%",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          Delivery address
        </div>
        <DetailsEntry label="Address">street #3 h-232</DetailsEntry>
        <DetailsEntry label="City">Lahore</DetailsEntry>
        <DetailsEntry label="State">Punjab</DetailsEntry>
        <DetailsEntry label="Zipcode">Active</DetailsEntry>
        <DetailsEntry label="Delivery Instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          reprehenderit expedita et tenetur nulla saepe officia iure alias
          possimus, beatae consequatur exercitationem error dignissimos.
          Tempore, quo fuga quae earum hic illum saepe unde? Natus ducimus,
          voluptate totam laudantium, quam ullam veniam officiis placeat vitae
        </DetailsEntry>
        {/* <DetailsEntry label="Delivery Instructions" secure={true}>
          23904567
        </DetailsEntry> */}
        <div
          className="container__main__content__details__heading"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "7px",
            width: "50%",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          Billing address
        </div>

        <DetailsEntry label="Address">street #3 h-232</DetailsEntry>
        <DetailsEntry label="City">Lahore</DetailsEntry>
        <DetailsEntry label="State">Punjab</DetailsEntry>
        <DetailsEntry label="Zipcode">Active</DetailsEntry>
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
