export default function ContactInfoCard({}) {
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header">
        Reschedule Return Date
      </div>
      <div className="order__details__main__customer__card__content">
        <input
          type="date"
          className="order__details__main__customer__card__content__input"
        />
        <button className="order__details__main__customer__card__content__button">
          Reshedule return date
        </button>
      </div>
    </div>
  );
}
