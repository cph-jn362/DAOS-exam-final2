import WelcomePageCSS from "./WelcomePage.module.css";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import SignupSucess from "../media/signup-success.png";

const WelcomePage = () => {
  const userId = localStorage.getItem("userId");

  const {
    data: user,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/user/" + userId);

  return (
    <div className={WelcomePageCSS.default}>
      <img src={SignupSucess} alt="signup-success" width="50%" />
      {user && <h1>Welcome {user.fname}</h1>}
      <p>
        You can now create posts to to find other to play with or contact <br />
        musicians through their posts.
      </p>
      <Link to="/profile">Finish Profile</Link>
    </div>
  );
};

export default WelcomePage;
