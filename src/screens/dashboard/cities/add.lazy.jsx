import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function CityAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" id="Name" />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="State"
              placeholder=" select State"
              id="State"
              error="select state"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Status"
              placeholder=" select status"
              id="Status"
              error="select Status"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
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
