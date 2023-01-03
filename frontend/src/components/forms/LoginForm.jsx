import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormCSS from "./LoginForm.module.css";
import validateLogin from "./validateLogin";
import ValidationMessage from "../page-exclusive/validation-message";

const LoginForm = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(false);
  const [validations, setValidations] = useState([]);

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    setIsLoading(true);

    const user = {
      email,
      password,
    };

    const validatateArray = validateLogin(user);

    if (validatateArray.length == 0) {
      setValidation(false);

      setTimeout(() => {
        fetch("http://127.0.0.1:3000/user/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (!res.status == 201) {
              throw new Error("failed to fetch data");
            }
            return res.json();
          })
          .then((res) => {
            setIsLoading(false);
            if (res.statusCode == 401) {
              setValidation(true);
              setValidations(["Incorrect Password"]);
            } else {
              localStorage.setItem("token", res.access_token);
              localStorage.setItem("userId", res.userId);
              setIsLoading(false);
              setLoggedIn(true);
              navigate("/profile");
            }
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err.message);
          });
      }, 750);
    } else {
      setIsLoading(false);
      setValidation(true);
      setValidations(validatateArray);
    }
  }

  return (
    <form className={LoginFormCSS.default} onSubmit={login}>
      <p>
        <b>E-mail</b>
      </p>
      <p>Enter your E-mail * </p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        <b>Password</b>
      </p>
      <p>Enter your password * </p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={LoginFormCSS.loginButton}>Log in</button>
      {error && <p className={LoginFormCSS.errMsg}>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {validation && <ValidationMessage validations={validations} />}
    </form>
  );
};

export default LoginForm;
