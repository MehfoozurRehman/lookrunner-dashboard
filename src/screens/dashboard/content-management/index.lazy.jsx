import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function ContentManagement() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <Input
            type="text"
            label="Heading"
            placeholder="Enter heading"
            id="Heading"
          />
        </div>
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
          How Lookrunner works
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            margin: "2em 0em",
          }}
        ></div>
        <Input
          type="text"
          label="Heading 1"
          placeholder="Enter your Heading 1"
          id="Heading 1"
        />
        <Textarea
          label="Description"
          placeholder="Enter your Description"
          id="Description"
          error="Enter your Description"
        />
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            margin: "2em 0em",
          }}
        ></div>
        <Input
          type="text"
          label="Heading 2"
          placeholder="Enter your Heading 2"
          id="Heading 2"
        />
        <Textarea
          label="Description"
          placeholder="Enter your Description"
          id="Description"
          error="Enter your Description"
        />
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            margin: "2em 0em",
          }}
        ></div>
        <Input
          type="text"
          label="Heading 3"
          placeholder="Enter your Heading 3"
          id="Heading 3"
        />
        <Textarea
          label="Description"
          placeholder="Enter your Description"
          id="Description"
          error="Enter your Description"
        />
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            margin: "2em 0em",
          }}
        ></div>
        <Select
          label="Select Products"
          placeholder="select "
          id="Select Products"
          error="select state"
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
