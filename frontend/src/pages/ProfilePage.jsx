import EditSetButtons from "../components/page-exclusive/edit-set-buttons";
import AddInstrumentButton from "../components/page-exclusive/add-instrument-button";
import ProfilePlaceholder from "../media/profile-placeholder.png";
import ProfilePageCSS from "./ProfilePage.module.css";
import CreateEnsembleButton from "../components/page-exclusive/create-ensemble-button";
import InstrumentList from "../components/page-exclusive/instrument-list";
import ProfileEnsembleList from "../components/page-exclusive/profile-ensemble-list";
import { useState, useEffect } from "react";
import moment from "moment";

const ProfilePage = () => {
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState(null);
  const [userEnsemble, setUserEnsemble] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:3000/user/" + userId)
        .then((res) => {
          if (!res.status === 200) {
            throw Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setUser(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });

      fetch("http://127.0.0.1:3000/ensemble/user/" + userId)
        .then((res) => {
          if (!res.status === 200) {
            throw Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setUserEnsemble(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 750);
  });

  return (
    <div>
      <div className={ProfilePageCSS.profileBoks1}>
        <img
          src={ProfilePlaceholder}
          alt="profile-placeholder"
          width="120px"
          height="120px"
        />
        <div className={ProfilePageCSS.description}>
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
          {user && <h1>{user.fname + " " + user.lname}</h1>}
          {user && <p>Created {moment(user.createdAt).calendar()}</p>}
          {user && <p>{user.email}</p>}
        </div>
        <div className={ProfilePageCSS.buttons}>
          <EditSetButtons />
        </div>
      </div>
      <div className={ProfilePageCSS.profileBoks2}>
        <h1>Instruments</h1>
        <AddInstrumentButton />
      </div>
      <div className={ProfilePageCSS.profileBoks3}>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {user && <InstrumentList user={user} />}
      </div>
      <div className={ProfilePageCSS.profileBoks4}>
        <h1>My ensembles</h1>
        <CreateEnsembleButton />
      </div>
      <div className={ProfilePageCSS.profileBoks5}>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {userEnsemble && <ProfileEnsembleList ensemble={userEnsemble} />}
      </div>
    </div>
  );
};

export default ProfilePage;
