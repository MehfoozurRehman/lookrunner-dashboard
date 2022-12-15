import { Input, Select, Textarea } from "../../../components";
import { useBackLocation } from "global";
import { Link } from "router";
export default function stateAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input
          type="text"
          label="Question"
          placeholder="Enter your Question"
          id="Question"
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
