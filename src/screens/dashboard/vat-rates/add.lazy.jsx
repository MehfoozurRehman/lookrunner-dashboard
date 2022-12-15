import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function supplierAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Name"
          placeholder="Enter Company name"
          id="Name"
        />
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          id="Name"
        />

        <Select
          label="Name"
          placeholder="Enter your name"
          id="name"
          error="sdfkjsdkjflskajdflkjsdf"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
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
