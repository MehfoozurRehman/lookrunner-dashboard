import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";
import Textarea from "../../../components/Textarea";

export default function CouponsAdd() {
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
              label="Code"
              placeholder="Enter your code"
              id="Code"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Discount Amount"
              placeholder="Enter your discount amount"
              id="Discount Amount"
            />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Discount Type"
              placeholder="Select Discount Type"
              id="Discount Type"
              error="Discount Type"
              options={[
                { value: "User management", label: "User management" },
                { value: "Order management", label: "Order management" },
                { value: "management", label: "management" },
              ]}
            />
          </div>
        </div>
        <Select
          label="Status"
          placeholder="Select Status"
          id="Status"
          error="Status"
          options={[
            { value: "Active", label: "Active" },
            { value: "Deactive", label: "Deactive" },
          ]}
        />
        <Textarea
          label="Description"
          placeholder="Enter your Description"
          id="Description"
          error="Enter your Description"
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
