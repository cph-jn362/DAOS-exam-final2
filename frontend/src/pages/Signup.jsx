import SignupCSS from "./Signup.module.css";
import SignupForm from "../components/forms/SignupForm";

export default function Signup({ setLoggedIn }) {
  return (
    <div className={SignupCSS.default}>
      <h1>Register profile</h1>
      <SignupForm setLoggedIn={setLoggedIn} />
    </div>
  );
}
