import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function ProductAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Title" placeholder="Short sleeve t-shirt" />
        <Textarea
          label="Description"
          placeholder="Enter Description..."
          error="Enter Description"
        />
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Product Status"
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Product Category"
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Product Sub-Category"
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Supplier "
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Brand"
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Tags"
              placeholder="Select State"
              error="Select State"
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>
        <div
          className="container__main__content__details__heading"
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
          Options
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Product Status" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Product Status" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Product Status" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Product Status" />
          </div>
        </div>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button__product container__main__content__details__buttons__primary"
        >
          Discard
        </Link>
        <div
          className="container__main__content__details__heading"
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
          Pricing
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Cost of Unit" placeholder="$00" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Selling Price" placeholder="$00" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Discounted Price" placeholder="$00" />
          </div>

          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Taxable" placeholder="$00" />
          </div>
        </div>
        <Input type="text" label="Take Rate (Percentage)" placeholder="abc" />
        <div
          className="container__main__content__details__heading"
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
          Media
        </div>
      </div>

      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add New Product
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Duplicate Product
        </Link>
      </div>
    </div>
  );
}
