import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupFormCSS from "./SignupForm.module.css";
import validateSignup from "./validateSignup";
import ValidationMessage from "../page-exclusive/validation-message";

export default function SignUpForm({ setLoggedIn }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [condition, setcondition] = useState("false");
  const [newsletter, setNewsletter] = useState("false");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(false);
  const [validations, setValidations] = useState([]);

  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();

    setIsLoading(true);

    const user = {
      fname,
      lname,
      email,
      password,
      condition,
      newsletter,
    };

    const validatateArray = validateSignup(user);

    if (validatateArray.length == 0) {
      setValidation(false);

      setTimeout(() => {
        fetch("http://127.0.0.1:3000/user/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (!res.status == 201) {
              throw new Error("· Failed to fetch data");
            }
            return res.json();
          })
          .then((res) => {
            setIsLoading(false);
            if (res.statusCode == 400 || res.statusCode == 500) {
              setValidation(true);
              setValidations(["This email is already taken"]);
            } else {
              localStorage.setItem("token", res.access_token);
              localStorage.setItem("userId", res.userId);
              setIsLoading(false);
              setLoggedIn(true);
              navigate("/welcome");
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
    <form onSubmit={signup} className={signupFormCSS.default}>
      <p>
        <b>First Name</b>
      </p>
      <p>Enter your First name *</p>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        required
      />
      <p>
        <b>Last Name</b>
      </p>
      <p>Enter your Last name *</p>
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        required
      />
      <p>
        <b>E-mail</b>
      </p>
      <p>Enter your E-mail *</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        <b>Password</b>
      </p>
      <p>Enter a password *</p>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={signupFormCSS.checkboxes}>
        <input
          type="checkbox"
          value={condition}
          required
          onChange={(e) => setcondition(e.target.checked)}
        />
        <p className={signupFormCSS.conditionText}>Accept conditions *</p>
        <input
          type="checkbox"
          value={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        <p>Sign up for newsletter</p>
      </div>
      <button className={signupFormCSS.signupButton}>Submit</button>
      {error && <p className={signupFormCSS.errMsg}>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {validation && <ValidationMessage validations={validations} />}
    </form>
  );
}
