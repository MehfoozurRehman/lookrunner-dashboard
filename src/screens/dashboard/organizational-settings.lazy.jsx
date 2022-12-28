import { Input } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function OrganizationalSetting() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Minimum number of items for trial"
              placeholder="Enter Minimum number of items for trial"
            />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Maximum number of items for trial"
              placeholder="Enter Maximum number of items for trial"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Days for Returns"
              placeholder="Enter days for returns"
            />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Hours for Returns"
              placeholder="Enter hours for returns"
            />
          </div>
        </div>
        <div
          className="container__main__content__details__heading"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "4px 12px",
            width: "fit-content",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          LR Contact Details
        </div>
        <Input type="text" label="Address" placeholder="Enter Address " />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Phone No"
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Email" placeholder="Enter email" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Facebook" placeholder="Enter Facebook" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Instagram"
              placeholder="Enter Instagram"
            />
          </div>
        </div>
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
