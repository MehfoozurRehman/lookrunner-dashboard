import { OrderDetailsCard, OrderProductsCard } from "components";

import CardTransaction from "components/CardTransaction";
import ContactInfoCard from "components/ContactInfoCard";
import CustomerCard from "components/CustomerCard";
import ScrollContainer from "react-indiana-drag-scroll";
import SendMessageCard from "components/SendMessageCard";
import Step from "components/Step";
import TimelineCard from "components/TimelineCard";
import { useState } from "react";

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

function OrderStatus() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="order__details__steps">
      <div className="order__details__steps__heading">Order Details</div>
      <ScrollContainer className="order__details__steps__content">
        <Step label="Ordered" active={activeStep >= 0} />
        <Step label="Delivered" active={activeStep >= 1} />
        <Step label="Waiting for Pickup" active={activeStep >= 2} />
        <Step label="Return Initiated" active={activeStep >= 3} />
        <Step label="Picked up" active={activeStep >= 4} />
        <Step label="Payment Completed" active={activeStep >= 5} />
      </ScrollContainer>
      <button
        className="order__details__steps__button"
        disabled={activeStep === 5}
        onClick={() => {
          setActiveStep(activeStep + 1);
        }}
      >
        {activeStep === 0
          ? "Move to delivered"
          : activeStep === 1
          ? "Move to waiting for pickup"
          : activeStep === 2
          ? "Move to return initiated"
          : activeStep === 3
          ? "Move to picked up"
          : activeStep === 4
          ? "Move to payment Completed"
          : "Finished"}
      </button>
    </div>
  );
}
