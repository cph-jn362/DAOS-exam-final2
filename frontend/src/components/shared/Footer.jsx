import { Link } from "react-router-dom";
import FooterCSS from "./Footer.module.css";
import SoMeIcons from "../atoms/SoMeIcons";
import MusicNotesFooter from "../../media/musical-notes-footer.png"
import DaosIcon from "../../media/daos-icon.png"

const Footer = ({loggedIn}) => {
  return (
    <nav className={FooterCSS.footer}>
      <div className={FooterCSS.footerBoks1}>
        <h1>Music Interplay</h1>
        {loggedIn && <Link to = "/">
          Home
        </Link>}
        {loggedIn && <Link to = "/profile">
          Profile
        </Link>}
        <SoMeIcons className={FooterCSS.icons}/>
      </div>
      <div>
        <img src={MusicNotesFooter} alt="musical-notes-footer" width="300px"/>
      </div>
      <div>
        <img src={DaosIcon} alt="daos-icon" width="350px"/>
      </div>
    </nav>
  );
};

export default Footer;
