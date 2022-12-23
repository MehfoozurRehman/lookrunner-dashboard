import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function CityAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="State"
              placeholder=" select State"
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
