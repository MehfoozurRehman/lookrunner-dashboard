import CheckBox from "../../components/CheckBox";
import { Link } from "router";
import { useBackLocation } from "global";
import { useState } from "react";

export default function ReturnSchedule() {
  const backLocation = useBackLocation();
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <CheckBox
          value={isChecked}
          label="label"
          labelColor="#242424"
          checkedColor="#242424"
          unCheckedColor="#7fffd4"
          iconColor="#ffffff"
          onChange={() => {
            isChecked ? setIschecked(false) : setIschecked(true);
          }}
        />
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
