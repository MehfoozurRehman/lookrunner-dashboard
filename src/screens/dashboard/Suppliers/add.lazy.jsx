import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function SupplierAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Company"
              placeholder="Enter Company"
              id="Company"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Brand Name"
              placeholder="Enter Brand Name"
              id="Brand Name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Vat Number"
              placeholder="Enter Vat Number"
              id="Vat Number"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Email address"
              placeholder="Enter email address"
              id="Email address"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Phone No."
              placeholder="Enter Phone"
              id="Phone No."
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="State"
              placeholder="Select State"
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
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="City"
              placeholder="Select City"
              id="City"
              error="Select City"
              options={[
                { value: "Lahore", label: "Lahore" },
                { value: "Ali pur", label: "Ali pur" },
                { value: "Fsd", label: "Fsd" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Postal code"
              placeholder="Enter Postal code"
              id="Postal code"
            />
          </div>
        </div>

        <Input
          type="text"
          label="Address"
          placeholder="Enter Address"
          id="Address"
        />

        <Textarea
          label="Description"
          placeholder="Enter Description"
          id="Description"
          error="Enter Description"
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
