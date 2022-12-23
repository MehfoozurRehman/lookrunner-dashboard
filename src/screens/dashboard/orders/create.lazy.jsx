export default function create() {
  return (
    <>
      <div className="main__creat__order__container">
        {/* <div className="main__creat__order__container__left">
          <div className="main__creat__order__container__left__product__card">
            Products
          </div>
        </div> */}
        <div className="main__creat__order__container__payment__card">
          <div className="main__creat__order__container__payment__card__heading">
            Payment
          </div>

          <PaymentCard heading="Subtotal" price="RS 12000" />
          <PaymentCard heading="Add Discount" value="---" price="RS 12000" />
          <PaymentCard heading="Add Shipping" value="---" price="RS 12000" />
          <PaymentCard
            heading="Add Discount"
            value="GST 16%"
            price="RS 12000"
          />
          <PaymentCard heading="Total" price="RS 2320000" />
        </div>

        <div className="main__creat__order__container__right">
          <div className="order__details__main__customer__card__order">
            <div className="order__details__main__customer__card__header">
              Customer
              <span>Muhammad Dayyan</span>
              <span>1 Order</span>
            </div>
            <div className="order__details__main__customer__card__content">
              <div className="order__details__main__customer__card__content__row">
                <div className="order__details__main__customer__card__content__row__left">
                  <div className="order__details__main__customer__card__content__row__left__heading">
                    Contact information
                  </div>

                  <a
                    href="mailto:dayyanshahid13@gmail.com"
                    className="order__details__main__customer__card__content__row__left__email"
                  >
                    dayyanshahid13@gmail.com
                  </a>
                  <div className="order__details__main__customer__card__content__row__left__number">
                    +923219652222
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="order__details__main__customer__card__content__row__right"
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="order__details__main__customer__card__content__row">
                <div className="order__details__main__customer__card__content__row__left">
                  <div className="order__details__main__customer__card__content__row__left__heading">
                    SHIPPING ADDRESS
                  </div>

                  <div className="order__details__main__customer__card__content__row__left__number">
                    Muhammad Dayyan P-4-B, NEW GARDEN BLOCK, FAISALABAD PAKISTAN
                    Faisalabad 38000 Pakistan
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="order__details__main__customer__card__content__row__right"
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="order__details__main__customer__card__content__row">
                <div className="order__details__main__customer__card__content__row__left">
                  <div className="order__details__main__customer__card__content__row__left__heading">
                    BILLING ADDRESS
                  </div>

                  <div className="order__details__main__customer__card__content__row__left__number">
                    Same as shipping address
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="order__details__main__customer__card__content__row__right"
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.269 3.16797H17.5644C18.1731 3.16797 18.757 3.39624 19.1874 3.80257C19.6179 4.2089 19.8597 4.76 19.8597 5.33464V20.5013C19.8597 21.0759 19.6179 21.627 19.1874 22.0334C18.757 22.4397 18.1731 22.668 17.5644 22.668H3.7924C3.18364 22.668 2.59981 22.4397 2.16936 22.0334C1.7389 21.627 1.49707 21.0759 1.49707 20.5013V5.33464C1.49707 4.76 1.7389 4.2089 2.16936 3.80257C2.59981 3.39624 3.18364 3.16797 3.7924 3.16797H6.08773"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1206 1H7.23458C6.60074 1 6.08691 1.48502 6.08691 2.08333V4.25C6.08691 4.84831 6.60074 5.33333 7.23458 5.33333H14.1206C14.7544 5.33333 15.2682 4.84831 15.2682 4.25V2.08333C15.2682 1.48502 14.7544 1 14.1206 1Z"
                      stroke="#5E5F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="estimated__taxes__container">
        Texes may be estimates until the order is created. Learn more about
        <span>estimated taxes</span>
      </div>
      <div className="Payment__due__later__conatainer">
        <div className="Payment__due__later__conatainer__check__box">
          <input type="checkbox" />
          <div className="Payment__due__later__conatainer__check__box__label">
            Payment due later
          </div>
        </div>
        <div className="Payment__due__later__conatainer__btn">
          <div className="Payment__due__later__conatainer__btn__send">
            Send invoice
          </div>
          <div className="Payment__due__later__conatainer__btn__Collect__payment">
            Collect payment
          </div>
        </div>
      </div>
    </>
  );
}
function PaymentCard({ heading, value, price }) {
  return (
    <div className="main__creat__order__container__payment__card__entry__wraper">
      <div className="main__creat__order__container__payment__card__entry__heading">
        {heading}
      </div>
      <div className="main__creat__order__container__payment__card__entry__value">
        {value}
      </div>
      <div className="main__creat__order__container__payment__card__entry__price">
        {price}
      </div>
    </div>
  );
}
