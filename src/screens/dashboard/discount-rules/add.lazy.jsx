import { Input, Select } from "components";

import CheckBox from "components/CheckBox";
import { Link } from "router";
import { useBackLocation } from "global";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function DiscountRuleAdd() {
  const backLocation = useBackLocation();
  const { state } = useLocation();
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="container__main__content__details">
      {state.type === "delivery" ? (
        <div className="container__main__content__details__main container__main__content__details__main__special">
          <div className="container__main__content__details__main__heading">
            Delivery Discount
          </div>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input type="text" label="Name" placeholder="Enter name" />
            </div>
            <div className="container__main__content__details__main__row__entry">
              <Input type="text" label="Code" placeholder="Enter code" />
            </div>
          </div>
          <div className="container__main__content__details__main__row">
            {" "}
            <div className="container__main__content__details__main__row__entry">
              {" "}
              <CheckBox
                label="Free Delivery"
                labelColor="var(--colorLight)"
                checkedColor="#2A5E59"
                unCheckedColor="var(--backgroundColor)"
                iconColor="#ffffff"
              />{" "}
              <CheckBox
                label="Percentage Discount"
                labelColor="var(--colorLight)"
                checkedColor="#2A5E59"
                unCheckedColor="var(--backgroundColor)"
                iconColor="#ffffff"
              />{" "}
            </div>{" "}
          </div>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Start Date"
                placeholder="Enter start date"
              />
            </div>
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Start Time"
                placeholder="Enter start time"
              />
            </div>
          </div>
          <CheckBox
            value={isEnd}
            label="Set end date and time"
            labelColor="var(--colorLight)"
            checkedColor="#2A5E59"
            unCheckedColor="var(--backgroundColor)"
            iconColor="#ffffff"
            onChange={() => {
              setIsEnd(!isEnd);
            }}
          />
          {isEnd && (
            <div className="container__main__content__details__main__row">
              <div className="container__main__content__details__main__row__entry">
                <Input
                  type="text"
                  label="End Date"
                  placeholder="Enter end date"
                />
              </div>
              <div className="container__main__content__details__main__row__entry">
                <Input
                  type="text"
                  label="End Time"
                  placeholder="Enter end time"
                />
              </div>
            </div>
          )}
          <div className="discard__btn">
            <button
              style={{
                marginTop: "1em",
                padding: ".6em 1.5em",
                border: "1px solid black",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Discard
            </button>
          </div>
        </div>
      ) : (
        <div className="container__main__content__details__main container__main__content__details__main__special">
          <div className="container__main__content__details__main__heading">
            Product Discount
          </div>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input type="text" label="Name" placeholder="Enter name" />
            </div>
            <div className="container__main__content__details__main__row__entry">
              <Input type="text" label="Code" placeholder="Enter code" />
            </div>
          </div>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Product"
                placeholder="No. of products"
              />
            </div>
          </div>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <CheckBox
                label="Free Delivery"
                labelColor="var(--colorLight)"
                checkedColor="#2A5E59"
                unCheckedColor="var(--backgroundColor)"
                iconColor="#ffffff"
              />
              <CheckBox
                label="Percentage Discount"
                labelColor="var(--colorLight)"
                checkedColor="#2A5E59"
                unCheckedColor="var(--backgroundColor)"
                iconColor="#ffffff"
              />
            </div>
          </div>
          <di v className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Percentage Discount"
                placeholder="Enter percentage discount"
              />
            </div>
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Delivery Discount"
                placeholder="Enter delivery discount"
              />
            </div>
          </di>
          <div className="container__main__content__details__main__row">
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Start Date"
                placeholder="Enter start date"
              />
            </div>
            <div className="container__main__content__details__main__row__entry">
              <Input
                type="text"
                label="Start Time"
                placeholder="Enter start time"
              />
            </div>
          </div>
          <CheckBox
            value={isEnd}
            label="Set end date and time"
            labelColor="var(--colorLight)"
            checkedColor="#2A5E59"
            unCheckedColor="var(--backgroundColor)"
            iconColor="#ffffff"
            onChange={() => {
              setIsEnd(!isEnd);
            }}
          />
          {isEnd && (
            <div className="container__main__content__details__main__row">
              <div className="container__main__content__details__main__row__entry">
                <Input
                  type="text"
                  label="End Date"
                  placeholder="Enter end date"
                />
              </div>
              <div className="container__main__content__details__main__row__entry">
                <Input
                  type="text"
                  label="End Time"
                  placeholder="Enter end time"
                />
              </div>
            </div>
          )}
          <div className="discard__btn">
            <button
              style={{
                marginTop: "1em",
                padding: ".6em 1.5em",
                border: "1px solid black",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Discard
            </button>
          </div>
        </div>
      )}

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
