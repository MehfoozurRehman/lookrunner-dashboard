import { Avatar } from "components";
import { DetailsEntry } from "components";
import { Link } from "router";
import { useBackLocation } from "global";

export default function CustomerDetails() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main">
        <div className="container__main__content__details__main__wraper">
          <div className="container__main__content__details__main__wraper__heading">
            4830 Wilson Rd Ste 300 Humble, TX 77396. Customer for 4 months
          </div>
          <div className="container__main__content__details__main__wraper__main__box">
            <div className="container__main__content__details__main__wraper__box">
              <div className="container__main__content__details__main__wraper__box__title">
                Amount Spent
              </div>
              <div className="container__main__content__details__main__wraper__box__value">
                $131
              </div>
            </div>
            <div className="container__main__content__details__main__wraper__box">
              <div className="container__main__content__details__main__wraper__box__title">
                Order
              </div>
              <div className="container__main__content__details__main__wraper__box__value">
                31
              </div>
            </div>
            <div className="container__main__content__details__main__wraper__box">
              <div className="container__main__content__details__main__wraper__box__title">
                Average Order Value
              </div>
              <div className="container__main__content__details__main__wraper__box__value">
                $4,843.40
              </div>
            </div>
          </div>
        </div>
        <div className="container__main__content__details__last__order__wraper">
          <div className="container__main__content__details__last__order__header">
            Last Order Placed
          </div>
          <div className="container__main__content__details__last__order__id__wraper">
            <div className="container__main__content__details__last__order__id">
              #1213
            </div>
            <div className="container__main__content__details__last__order__id__title">
              Trial
            </div>
          </div>
          <div className="container__main__content__details__last__order__time">
            31 july 2022 at 12:54pm
          </div>
        </div>
        <div className="container__main__content__details__last__orders__img__wraper">
          <div className="container__main__content__details__last__orders__img">
            <Avatar className="container__main__content__listing__table__content__list__entry__img" />
          </div>
          <div className="container__main__content__listing__table__content__list__entry__img__heading__container">
            <div className="container__main__content__listing__table__content__list__entry__img__header">
              RM-113 at 12.54pm
            </div>
            <div className="container__main__content__listing__table__content__list__entry__img__header__value">
              XS
            </div>
          </div>
        </div>
        <div className="container__main__content__details__last__orders__price__btn__price">
          <div className="container__main__content__details__last__orders__price">
            $ 3,39990
          </div>
          <div className="container__main__content__details__last__orders__btn">
            <Link
              to={backLocation + "/edit"}
              className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
            >
              Create Order
            </Link>
            <Link
              to={backLocation}
              className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
            >
              View All Orders
            </Link>
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
          Customer Names
        </div>
        <DetailsEntry label="First Name">asasasa</DetailsEntry>
        <DetailsEntry label="Last Name">AAsmm</DetailsEntry>
        <DetailsEntry label="Phone No.">+33-03948567</DetailsEntry>
        <DetailsEntry label="Email ">asmm333@gmail.com</DetailsEntry>
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
          Delivery address
        </div>
        <DetailsEntry label="Address">street #3 h-232</DetailsEntry>
        <DetailsEntry label="City">Lahore</DetailsEntry>
        <DetailsEntry label="State">Punjab</DetailsEntry>
        <DetailsEntry label="Zipcode">Active</DetailsEntry>
        <DetailsEntry label="Delivery Instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          reprehenderit expedita et tenetur nulla saepe officia iure alias
          possimus, beatae consequatur exercitationem error dignissimos.
          Tempore, quo fuga quae earum hic illum saepe unde? Natus ducimus,
          voluptate totam laudantium, quam ullam veniam officiis placeat vitae
        </DetailsEntry>
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
          Billing address
        </div>
        ``
        <DetailsEntry label="Address">street #3 h-232</DetailsEntry>
        <DetailsEntry label="City">Lahore</DetailsEntry>
        <DetailsEntry label="State">Punjab</DetailsEntry>
        <DetailsEntry label="Zipcode">Active</DetailsEntry>
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
