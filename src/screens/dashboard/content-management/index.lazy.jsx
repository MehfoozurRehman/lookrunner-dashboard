import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";
import { Plus } from "react-feather";

export default function ContentManagement() {
  const [image, setImage] = useState(null);
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
        <div className="container__main__content__details__main__row__uploader">
          <div className="container__main__content__details__main__input__label">
            dashboar img
          </div>
          <div className="container__main__content__details__main__row__img__uploader">
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className="container__main__content__details__main__row__img__uploader__input"
            />

            {image === null ? (
              <div className="container__main__content__details__main__row__img__uploader__content">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 43 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.625 28.125V35.625C37.625 36.6196 37.2475 37.5734 36.5755 38.2766C35.9035 38.9799 34.992 39.375 34.0417 39.375H8.95833C8.00797 39.375 7.09654 38.9799 6.42453 38.2766C5.75253 37.5734 5.375 36.6196 5.375 35.625V28.125"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.4596 15L21.5013 5.625L12.543 15"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 5.625V28.125"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt={image}
                  className="container__main__content__details__main__row__img__uploader__content"
                />
              </>
            )}
          </div>
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
