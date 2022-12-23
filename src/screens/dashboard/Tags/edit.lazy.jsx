import { Input, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function TagsEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" />

        <Textarea
          label="Description"
          placeholder="Enter Description"
          error="Enter Description"
        />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          discard
        </Link>
      </div>
    </div>
  );
}
