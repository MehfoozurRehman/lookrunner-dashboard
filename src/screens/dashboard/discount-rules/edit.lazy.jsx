import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function DiscountRuleEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Name" placeholder="Enter name" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Code" placeholder="Enter code" />
          </div>
        </div>

        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Start Date"
              placeholder="Enter start date"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Start Time"
              placeholder="Enter start time"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry__checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <div className="container__main__content__details__main__row__entry__checkbox__heading">
              {" "}
              Set End date
            </div>
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="End Date" placeholder="Enter end date" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="End Time" placeholder="Enter end time" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Delivery percentage"
              placeholder="Enter delivery percentage"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Discount Type"
              placeholder=" select State"
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
