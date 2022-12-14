import ReactSelect from "react-select";

export default function Select({ label, id, error, ...props }) {
  return (
    <div className="container__main__content__details__main__input">
      <label
        htmlFor={id}
        className="container__main__content__details__main__input__label"
      >
        {label}
      </label>
      <div
        className="container__main__content__details__main__input__field__wrapper"
        style={{ height: "fit-content" }}
      >
        <ReactSelect
          {...props}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary75: "#2a5e59",
              primary25: "#2a5e595e",
              primary50: "#2a5e595e",
              primary: "#2a5e59",
            },
          })}
        />
      </div>
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
