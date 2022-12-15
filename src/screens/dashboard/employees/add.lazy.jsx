import { Input, RichTextarea, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              id="First Name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              id="Last Name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Name"
              isMulti
              placeholder="Enter your name"
              id="name"
              error="sdfkjsdkjflskajdflkjsdf"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
                { value: "9", label: "9" },
                { value: "10", label: "10" },
                { value: "11", label: "11" },
                { value: "12", label: "12" },
                { value: "13", label: "13" },
                { value: "14", label: "14" },
                { value: "15", label: "15" },
                { value: "16", label: "16" },
                { value: "17", label: "17" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          id="name"
        />
        <Input
          type="password"
          label="Name"
          placeholder="Enter your name"
          id="name"
          secure={true}
        />
        <Select
          label="Name"
          placeholder="Enter your name"
          id="name"
          error="sdfkjsdkjflskajdflkjsdf"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Textarea
          label="Name"
          placeholder="Enter your name"
          id="name"
          error="errejaklfdjksajdflkjsdfkj"
        />
        <RichTextarea
          label="Name"
          placeholder="Enter your name"
          id="name"
          error="errejaklfdjksajdflkjsdfkj"
        />
      </div>
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
