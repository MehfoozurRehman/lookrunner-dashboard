import { Input } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function WarehousesAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Company Name"
              placeholder="Enter your company"
              id="Company Name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Phone"
              placeholder="Enter your phone"
              id="Phone"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Email Address"
              placeholder="Enter your email"
              id="Email Address"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Latitude"
              placeholder="Enter your Latitude"
              id="Latitude"
            />
          </div>
        </div>
        <Input
          type="text"
          label="Longitude"
          placeholder="Enter your Longitude"
          id="Longitude"
        />
        <Input
          type="text"
          label="Address"
          placeholder="Enter your address"
          id="Address"
        />
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Discard
        </Link>
      </div>
    </div>
  );
}
