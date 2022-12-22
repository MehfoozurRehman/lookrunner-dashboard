import { Input, Select } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              id="First Name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              id="Last Name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Phone"
              placeholder="Enter your phone"
              id="Phone"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Email"
              placeholder="Enter your email"
              id="Email"
            />
          </div>
        </div>

        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Username"
              placeholder="Enter your username"
              id="Username"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Department"
              placeholder="Select Department"
              id="Department"
              error="Department"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Referred By"
              placeholder="Enter referred by"
              id="Referred By"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Address"
              placeholder="Enter your address"
              id="Address"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Role"
              placeholder="Select Role"
              id="Role"
              error="Role"
              options={[
                { value: "admin", label: "admin" },
                { value: "employ", label: "employ" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Status"
              placeholder="Select Status"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="Password"
              label="Password"
              placeholder="Enter your password"
              id="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="Password"
              label="Confirm Password"
              placeholder="Enter your confirm password"
              id="Confirm Password"
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
