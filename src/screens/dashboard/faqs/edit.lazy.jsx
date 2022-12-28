import { Input, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function FaqEdit() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Type" placeholder="Enter Type" />
        <Input type="text" label="Question" placeholder="Enter Question Here" />
        <Textarea label="Answer" placeholder="Enter Answer Here" />
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
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
