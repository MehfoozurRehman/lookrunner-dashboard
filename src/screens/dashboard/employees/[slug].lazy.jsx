import { DetailsEntry } from "../../../components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <DetailsEntry label="Name">John Doe</DetailsEntry>
        <DetailsEntry label="Name" secure={true}>
          John Doe
        </DetailsEntry>
        <DetailsEntry label="Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          reprehenderit expedita et tenetur nulla saepe officia iure alias
          possimus, beatae consequatur exercitationem error dignissimos.
          Tempore, quo fuga quae earum hic illum saepe unde? Natus ducimus,
          voluptate totam laudantium, quam ullam veniam officiis placeat vitae
          eaque hic ut fuga error ipsum deleniti tempore quia cumque earum!
          Exercitationem quam possimus, quod nam explicabo magni nesciunt
          deleniti, impedit labore enim eum necessitatibus, beatae corporis?
          Dolor repellendus veniam, praesentium harum quaerat necessitatibus
          atque, cupiditate iure veritatis perspiciatis ipsum est velit numquam
          dolorum alias ipsam repudiandae in nisi! Nam alias libero est error
          perferendis dolorum.
        </DetailsEntry>
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation + "/edit"}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Edit
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
