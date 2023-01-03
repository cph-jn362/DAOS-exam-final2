import homepageCSS from "./Homepage.module.css";
import musicalHome from "../media/musical-notes.png";
import HomepageBanner from "../components/misc/HompageBanner";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className={homepageCSS.content}>
        <div className={homepageCSS.buttons}>
          <h1>
            The place where amateur musicians can find each other and play music
          </h1>
          <Link to="/ensemble" className={homepageCSS.ensembleButton}>
            Find ensembles
          </Link>
          <Link to="/musician" className={homepageCSS.musicianButton}>
            Find musicians
          </Link>
        </div>
        <img src={musicalHome} alt="musical-notes" />
      </div>
      <div className={homepageCSS.banner}>
        <HomepageBanner />
      </div>
    </div>
  );
};

export default Homepage;
