import { OrderDetailsCard, OrderProductsCard } from "components";

import CardTransaction from "../../../components/CardTransaction";
import ContactInfoCard from "../../../components/ContactInfoCard";
import CustomerCard from "../../../components/CustomerCard";
import SendMessageCard from "../../../components/SendMessageCard";
import TimelineCard from "../../../components/TimelineCard";

export default function OrderDetails() {
  return (
    <div className="order__details">
      <div className="order__details__steps">
        <div className="order__details__steps__heading">Order Details</div>
        <div className="order__details__steps__content">
          <Step />
        </div>
        <button className="order__details__steps__button">
          Move to delivered
        </button>
      </div>
      <div className="order__details__main">
        <div className="order__details__main__row">
          <OrderDetailsCard
            label="Booking Details"
            buttonLabel="Cancel Booking"
          />
          <OrderDetailsCard
            label="Return Details"
            buttonLabel="Send Reminder"
          />
        </div>
        <div className="order__details__main__row">
          <OrderProductsCard label="Booking" />
          <OrderProductsCard label="Returning" />
          <OrderProductsCard label="Keeping" />
        </div>
        <div className="order__details__main__row">
          <div className="order__details__main__row__col">
            <CustomerCard />
            <ContactInfoCard />
            <SendMessageCard />
          </div>
          <div className="order__details__main__row__col">
            <TimelineCard />
            <CardTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({}) {
  return (
    <div className="order__details__steps__content__step">
      <div className="order__details__steps__content__step__icon"></div>
      <div className="order__details__steps__content__step__label">Ordered</div>
      <div className="order__details__steps__content__step__details">
        <span>Date</span>
        22/02/2021
      </div>
    </div>
  );
}
