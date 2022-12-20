import { ChevronRight, X } from "react-feather";
import { Link } from "react-router-dom";

export default function DiscountPopup({ setShow }) {
  return (
    <div className="customer__detail__popup">
      <div className="customer__detail__popup__overlay">
        <div className="customer__detail__popup__overlay__card">
          <button
            onClick={() => {
              setShow(false);
            }}
            className="customer__detail__popup__overlay__card__close"
          >
            <X />
          </button>
          <div className="customer__detail__popup__overlay__card__heading">
            Contact information
          </div>
          <div className="customer__detail__popup__overlay__card__detail">
            <Link className="customer__detail__popup__overlay__card__detail__entry">
              Delivery Discount
              <ChevronRight />
            </Link>
            <Link className="customer__detail__popup__overlay__card__detail__entry">
              Product Discount
              <ChevronRight />
            </Link>
          </div>
          <div className="customer__detail__popup__overlay__card__submit__discount">
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
