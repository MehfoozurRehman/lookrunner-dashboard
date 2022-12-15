import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function citieEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Name" placeholder="Name" id="Name" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Status"
              placeholder="Active"
              id="Status"
              error="Select "
              options={[
                { value: "Active", label: "Active" },
                { value: "Offline", label: "offline" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="State"
              placeholder="State"
              id="State"
              error="Select State"
              options={[
                { value: "punjab", label: "punjab" },
                { value: "khaber", label: "khaber" },
                { value: "bhr", label: "bhr" },
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
