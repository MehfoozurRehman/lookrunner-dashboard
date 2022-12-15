import { DetailsEntry } from "../../../components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function FaqDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Question">
          Lorem Ipasum is simply dummy text of the Lorem Ipasum is simply dummy
          text of the......
        </DetailsEntry>
        <DetailsEntry label="Answer">
          Lorem Ipasum is simply dummy text of the Lorem Ipasum is simply dummy
          text of the......
        </DetailsEntry>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
