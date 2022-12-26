import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useState } from "react";
import { useBackLocation } from "global";
import { ImageUploaderMultiple } from "../../../components/ImageUploaderMultiple";
import { VideoUploaderMultiple } from "../../../components/VideoUploaderMultiple";
import InputMulti from "../../../components/InputMulti";
import { VariantEntry } from "../../../components/VariantEntry";

export default function ProductEdit() {
  const backLocation = useBackLocation();
  const [thumbnails, setThumbnails] = useState([]);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [options, setOptions] = useState([]);
  return (
    <div className="product__form">
      <div className="product__form__col">
        <div className="product__form__col__panel">
          <Input type="text" label="Title" placeholder="Short sleeve t-shirt" />
          <Textarea label="Description" placeholder="Enter Description" />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Pricing</div>
          <Input
            type="number"
            label="Cost of unit"
            placeholder="Enter cost of unit"
          />
          <Input
            type="number"
            label="Selling price"
            placeholder="Enter selling price"
          />
          <Input
            type="number"
            label="Discount price"
            placeholder="Enter discount price"
          />

          <Input
            type="number"
            label="Tax rate (%)"
            placeholder="Enter tax rate"
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Media</div>
          <ImageUploaderMultiple
            label="Thumbnails"
            images={thumbnails}
            setImages={setThumbnails}
          />
          <ImageUploaderMultiple
            label="Images"
            images={images}
            setImages={setImages}
          />
          <VideoUploaderMultiple
            label="Videos"
            images={videos}
            setImages={setVideos}
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Variants</div>
          <div className="product__form__col__panel__row__header">
            <div className="product__form__col__panel__row__entry">Variant</div>
            <div className="product__form__col__panel__row__entry">Price</div>
            <div className="product__form__col__panel__row__entry">
              Quantity
            </div>
            <div className="product__form__col__panel__row__entry">SKU</div>
          </div>
          <VariantEntry />
          <div className="product__form__col__panel__row">
            <div className="product__form__col__panel__row__entry">M</div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
          </div>
          <div className="product__form__col__panel__row">
            <div className="product__form__col__panel__row__entry">L</div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
            <div className="product__form__col__panel__row__entry">
              <Input type="text" placeholder="Enter SKU" />
            </div>
          </div>
        </div>
      </div>
      <div className="product__form__col">
        <div
          className="product__form__col__panel"
          style={{
            padding: "2em",
          }}
        >
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
        <div className="product__form__col__panel">
          <Select
            label="Product Status"
            placeholder="Active"
            options={[
              { value: "Active", label: "Active" },
              { value: "Deactive", label: "Deactive" },
            ]}
          />
          <Select
            label="Product Category"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
          <Select
            label="Product Sub-Category"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
          <Select
            label="Supplier "
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
          <Select
            label="Brand"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
          <Select
            label="Tags"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
          <Select
            label="Taxable"
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
          />
        </div>
        <div className="product__form__col__panel">
          <div className="product__form__col__panel__heading">Options</div>
          <Input
            type="number"
            label="Cost of unit"
            placeholder="Enter cost of unit"
          />
          <InputMulti
            type="text"
            options={options}
            setOptions={setOptions}
            label="Cost of unit"
            placeholder="Enter cost of unit"
          />
          <div className="product__form__col__panel__btn">
            <button
              style={{
                backgroundColor: "black",
                padding: "7px 2em",
                borderRadius: "20px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
