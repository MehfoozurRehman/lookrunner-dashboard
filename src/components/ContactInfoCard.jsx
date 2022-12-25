export default function ContactInfoCard() {
  return (
    <div className="order__details__main__customer__card">
      <div className="order__details__main__customer__card__header">
        Reschedule Return Date
      </div>
      <div className="order__details__main__customer__card__info__all">
        <div className="order__details__main__customer__card__info">
          Existing Return Date
        </div>
        <div className="order__details__main__customer__card__info">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 1.66667H15V0.833333C15 0.61232 14.9122 0.400358 14.7559 0.244078C14.5996 0.0877974 14.3877 0 14.1667 0C13.9457 0 13.7337 0.0877974 13.5774 0.244078C13.4211 0.400358 13.3333 0.61232 13.3333 0.833333V1.66667H6.66667V0.833333C6.66667 0.61232 6.57887 0.400358 6.42259 0.244078C6.26631 0.0877974 6.05435 0 5.83333 0C5.61232 0 5.40036 0.0877974 5.24408 0.244078C5.0878 0.400358 5 0.61232 5 0.833333V1.66667H4.16667C3.062 1.66799 2.00296 2.1074 1.22185 2.88852C0.440735 3.66963 0.00132321 4.72867 0 5.83333L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V5.83333C19.9987 4.72867 19.5593 3.66963 18.7782 2.88852C17.997 2.1074 16.938 1.66799 15.8333 1.66667ZM1.66667 5.83333C1.66667 5.17029 1.93006 4.53441 2.3989 4.06557C2.86774 3.59673 3.50363 3.33333 4.16667 3.33333H15.8333C16.4964 3.33333 17.1323 3.59673 17.6011 4.06557C18.0699 4.53441 18.3333 5.17029 18.3333 5.83333V6.66667H1.66667V5.83333ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V8.33333H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z"
              fill="#2A5E59"
            />
            <path
              d="M10 13.75C10.6904 13.75 11.25 13.1904 11.25 12.5C11.25 11.8096 10.6904 11.25 10 11.25C9.30964 11.25 8.75 11.8096 8.75 12.5C8.75 13.1904 9.30964 13.75 10 13.75Z"
              fill="#2A5E59"
            />
            <path
              d="M5.83301 13.75C6.52336 13.75 7.08301 13.1904 7.08301 12.5C7.08301 11.8096 6.52336 11.25 5.83301 11.25C5.14265 11.25 4.58301 11.8096 4.58301 12.5C4.58301 13.1904 5.14265 13.75 5.83301 13.75Z"
              fill="#2A5E59"
            />
            <path
              d="M14.167 13.75C14.8573 13.75 15.417 13.1904 15.417 12.5C15.417 11.8096 14.8573 11.25 14.167 11.25C13.4766 11.25 12.917 11.8096 12.917 12.5C12.917 13.1904 13.4766 13.75 14.167 13.75Z"
              fill="#2A5E59"
            />
          </svg>
          12/03/22
        </div>
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
