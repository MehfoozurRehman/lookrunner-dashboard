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
              label="Start Date"
              placeholder="Enter your start date"
              id="Start Date"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Start Time"
              placeholder="Enter your start time"
              id="Start Time"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="End Date"
              placeholder="Enter your end date"
              id="End Date"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="End Time"
              placeholder="Enter your end time"
              id="End Time"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Delivery percentage"
              placeholder="Enter your delivery percentage"
              id="Delivery percentage"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Discount Type"
              placeholder=" select State"
              id="State"
              error="Discount Type is required"
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
