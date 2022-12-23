import { Input, Select } from "components";

import { Link } from "router";
import { useState } from "react";
import { useBackLocation } from "global";
import { useLocation } from "react-router-dom";
import CheckBox from "components/CheckBox";
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
            labelColor="#555555"
            checkedColor="#2A5E59"
            unCheckedColor="#f5f6fa"
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
          <CheckBox
            value={isEnd}
            label="Set end date and time"
            labelColor="#555555"
            checkedColor="#2A5E59"
            unCheckedColor="#f5f6fa"
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
        </div>
      )}

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
