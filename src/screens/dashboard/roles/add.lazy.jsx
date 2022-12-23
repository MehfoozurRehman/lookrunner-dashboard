import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function RoleAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <Input type="text" label="Name" placeholder="Enter name" />
        </div>
        <Select
          label="Select modules"
          placeholder="Select modules"
          error="Select modules"
          options={[
            { value: "User management", label: "User management" },
            { value: "Order management", label: "Order management" },
            { value: "management", label: "management" },
          ]}
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
