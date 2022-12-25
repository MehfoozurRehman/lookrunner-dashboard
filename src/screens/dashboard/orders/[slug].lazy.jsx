import { OrderDetailsCard, OrderProductsCard } from "components";

import CardTransaction from "components/CardTransaction";
import ContactInfoCard from "components/ContactInfoCard";
import CustomerCard from "components/CustomerCard";
import SendMessageCard from "components/SendMessageCard";
import TimelineCard from "components/TimelineCard";
import { OrderStatus } from "components/OrderStatus";
import OrderreturnDetails from "./../../../components/OrderreturnDetails";

export default function OrderDetails() {
  return (
    <div className="order__details">
      <OrderStatus />
      <div className="order__details__main">
        <div className="order__details__main__row">
          <OrderDetailsCard
            label="Booking Details"
            buttonLabel="Cancel Booking"
          />
          <OrderreturnDetails
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
