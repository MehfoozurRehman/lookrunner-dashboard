import { Input, Select, Textarea, RichTextarea } from "../../../components";
import { useBackLocation } from "global";
import { Link } from "router";
export default function faqEdit() {
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
          label="Answer"
          placeholder="Enter your Answer..."
          id="naAnswerme"
          error="Enter your Answer"
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
