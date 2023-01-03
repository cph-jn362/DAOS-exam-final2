import LoginCSS from "./Login.module.css";
import LoginForm from "../components/forms/LoginForm";

const Login = ({ setLoggedIn }) => {
  return (
    <div className={LoginCSS.default}>
      <h1>Log in</h1>
      <LoginForm setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default Login;
