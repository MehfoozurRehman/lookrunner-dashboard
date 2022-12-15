import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function zipcodeEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="Name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Delivery Charges"
              placeholder="Enter Delivery Charges"
              id="Delivery Charges"
            />
          </div>
        </div>
        <Select
          label="Enter VAT"
          placeholder=" Enter VAT"
          id="Enter VAT"
          error="sdfkjsdkjflskajdflkjsdf"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Select
          label="Status"
          placeholder="Status"
          id="Status"
          error="sdfkjsdkjflskajdflkjsdf"
          options={[
            { value: "Active", label: "Active" },
            { value: "Deactive", label: "Deactive" },
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
