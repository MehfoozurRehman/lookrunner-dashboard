import { Input, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";
import { ImageUploaderSingle } from "../../../components/ImageUploaderSingle";
import { useState } from "react";

export default function BrandAdd() {
  const [image, setImage] = useState(null);
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <Input type="text" label="Name" placeholder="Enter name" />
        <Textarea label="Description" placeholder="Enter Description" />
        <ImageUploaderSingle label="Image" image={image} setImage={setImage} />
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
          Delect
        </Link>
      </div>
    </div>
  );
}
