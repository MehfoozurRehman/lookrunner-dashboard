import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function CustomerAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter first name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Email" placeholder="Enter Email" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Phone" placeholder="Enter Phone" />
          </div>
        </div>
        <div
          className="container__main__content__details__heading"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "4px 12px",
            width: "fit-content",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          Delivery Address
        </div>
        <Input type="text" label="Address 1" placeholder="Enter Address 1" />
        <Input type="text" label="Address 2" placeholder="Enter Address 2" />
        <Select
          label="State"
          placeholder="Select State"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Select
          label="City"
          placeholder="Select City"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Input type="text" label="Zip Code" placeholder="Enter Zip Code" />

        <Textarea
          label="Delivery instruction"
          placeholder="Enter Delivery instruction"
        />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "14",
            padding: "4px 12px",
            width: "fit-content",
            borderRadius: "30px",
            margin: "12px 0px",
          }}
        >
          Billing Address
        </div>
        <Input type="text" label="Address 1" placeholder="Enter Address 1" />
        <Input type="text" label="Address 2" placeholder="Enter Address 2" />
        <Select
          label="State"
          placeholder="Select State"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Select
          label="City"
          placeholder="Select City"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Input type="text" label="Zip Code" placeholder="Enter Zip Code" />
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
