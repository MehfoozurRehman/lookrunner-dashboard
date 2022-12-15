import { Input, Select } from "../../../components";
import { useBackLocation } from "global";
import { Link } from "router";
export default function stateEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          id="Name"
        />
        <Select
          label="Status"
          placeholder=" select status"
          id="Status"
          error="select status"
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
