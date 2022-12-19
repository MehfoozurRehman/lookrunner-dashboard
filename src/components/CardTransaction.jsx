export default function CardTransaction({}) {
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header order__details__main__customer__card__header__special">
        Card Transaction
        <div className="order__details__main__customer__card__header__tabs">
          <button className="order__details__main__customer__card__header__tabs__tab order__details__main__customer__card__header__tabs__tab__active">
            Booking Transaction
          </button>
          <button className="order__details__main__customer__card__header__tabs__tab">
            Return Transaction
          </button>
        </div>
      </div>
      <div className="order__details__main__customer__card__content">
        <div className="order__details__main__customer__card__content__row">
          <div className="order__details__main__customer__card__content__row__label">
            Authorized
          </div>
          <div className="order__details__main__customer__card__content__row__value">
            Aur-163
          </div>
        </div>
      </div>
    </div>
  );
}
