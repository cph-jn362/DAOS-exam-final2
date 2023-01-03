import MusicianListCSS from "./musician-list.module.css";
import { Link } from "react-router-dom";
import PortraitPlaceholder from "../../media/portrait-placeholder.png";

const MusicianList = ({ users, query }) => {
  return (
    <div className={MusicianListCSS.list}>
      {users.filter(user=>user.fname.toLowerCase().includes(query)).map((user) => (
        <Link to={`/musician/${user._id}`}>
          <div className={MusicianListCSS.card} key={user.id}>
            <div className={MusicianListCSS.box1}>
              <img
                src={PortraitPlaceholder}
                alt="portrait-placeholder"
                width="50px"
                height="50px"
              />
              <h3>{user.fname + " " + user.lname}</h3>
            </div>
            <div className={MusicianListCSS.box2} > 
              <hr />
              <p>{user.email}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MusicianList;
