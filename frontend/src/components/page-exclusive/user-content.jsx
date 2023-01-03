import UserContentCSS from "./user-content.module.css";
import Placeholder from "../../media/placeholder.jpg";
import { Link } from "react-router-dom";

const UserContent = ({ user }) => {
  return (
    <div>
      <div className={UserContentCSS.default}>
        <div className={UserContentCSS.boks1}>
          <h1>{user.fname + " " + user.lname}</h1>
          <hr />
          <p>{user.email}</p>
          <p>
            <b>Address</b>
          </p>
          <p>{user.zipCode + " " + user.city}</p>
          <div>
            <p>
              <b>Description</b>
            </p>
            <p>{user.description}</p>
            <div className={UserContentCSS.buttons}>
              <Link to={-1} className={UserContentCSS.backButton}>
                ⯇ Go back
              </Link>
            </div>
          </div>
        </div>
        <div className={UserContentCSS.boks2}>
          <img src={Placeholder} alt="placeholder" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default UserContent;
