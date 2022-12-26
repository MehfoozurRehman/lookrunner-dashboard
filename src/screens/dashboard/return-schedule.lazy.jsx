import CheckBox from "../../components/CheckBox";
import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";

export default function ReturnSchedule() {
  const backLocation = useBackLocation();
  const [selectedDays, setSelectedDays] = useState([]);
  const listOfDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div
          style={{ fontSize: "20px", fontWeight: "700", marginBottom: "1em" }}
          className="container__main__content__details__heading"
        >
          Days
        </div>
        {listOfDays.map((day) => {
          return (
            <CheckBox
              value={selectedDays.includes(day)}
              label={day}
              labelColor="var(--colorLight)"
              checkedColor="#2A5E59"
              unCheckedColor="var(--backgroundColor)"
              iconColor="#ffffff"
              onChange={() => {
                if (selectedDays.includes(day)) {
                  setSelectedDays(selectedDays.filter((d) => d !== day));
                } else {
                  setSelectedDays([...selectedDays, day]);
                }
              }}
            />
          );
        })}
      </div>
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
