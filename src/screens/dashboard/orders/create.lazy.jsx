import CheckBox from "../../../components/CheckBox";
import { useState } from "react";

export default function create() {
  const [paymentDueLater, setPaymentDueLater] = useState(false);
  return (
    <div className="order__create">
      <div className="order__create__col">
        <div className="order__create__panel">
          <div className="order__create__panel__heading">Products</div>
        </div>
        <div className="order__create__panel">
          <div className="order__create__panel__heading">Payment</div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
          <div className="order__create__panel__row">
            <div className="order__create__panel__row__entry">Subtotal</div>
            <div className="order__create__panel__row__entry">RS 4,565.00</div>
          </div>
        </div>
        <div className="order__create__panel">
          <CheckBox
            value={paymentDueLater}
            label="Set end date and time"
            labelColor="var(--colorLight)"
            checkedColor="#2A5E59"
            unCheckedColor="var(--backgroundColor)"
            iconColor="#ffffff"
            onChange={() => {
              setPaymentDueLater(!paymentDueLater);
            }}
          />
        </div>
      </div>
      <div className="order__create__col">
        <div className="order__create__panel">
          <div className="order__create__panel__heading">Customer</div>
        </div>
      </div>
    </div>
  );
}
