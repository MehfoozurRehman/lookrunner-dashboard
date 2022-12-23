import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function Profile() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter first name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <Input type="text" label="First Name" placeholder="Enter first name" />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              secure
              type="password"
              label="Password"
              placeholder="Enter password"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              secure
              type="password"
              label="Confirm Password"
              placeholder="Enter confirm password"
            />
          </div>
        </div>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add
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
