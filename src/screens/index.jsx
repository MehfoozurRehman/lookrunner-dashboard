import { avatar, logo } from "assets";

import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../global";

export default function Index() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  return (
    <div className="login__container">
      <form
        className="login__container__form"
        onSubmit={(e) => {
          e.preventDefault();
          setUser({ profilePic: avatar, name: "John Doe" });
          navigate("/dashboard", { replace: true });
        }}
      >
        <img src={logo} alt="logo" className="login__container__form__logo" />
        <LoginInput
          label="Email Address"
          placeholder="Enter email address"
          id="email"
          error="Email is required"
          type="email"
        />
        <LoginInput
          label="Password"
          placeholder="Enter password"
          id="password"
          error="Password is required"
          type="password"
        />
        <button type="submit" className="login__container__form__button">
          Login
        </button>
      </form>
    </div>
  );
}

function LoginInput({ label, id, error, ...rest }) {
  return (
    <div className="login__container__form__input">
      {label && (
        <label htmlFor={id} className="login__container__form__input__label">
          {label}
        </label>
      )}
      <input
        className="login__container__form__input__field"
        id={id}
        name={id}
        {...rest}
      />
      {error && (
        <div className="login__container__form__input__error">{error}</div>
      )}
    </div>
  );
}
