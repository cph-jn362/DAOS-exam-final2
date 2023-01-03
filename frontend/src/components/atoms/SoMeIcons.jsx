import instaIcon from "../../media/instagram-white.png";
import faceIcon from "../../media/facebook-white.png";
import linkedIcon from "../../media/linkedin-white.png";
import SoMeCSS from "./SoMeIcons.module.css";

const SoMeIcons = () => {
  return (
    <div className={SoMeCSS.default}>
      <img src={instaIcon} alt="instagram-icon" width="30px" />
      <img src={faceIcon} alt="facebook-icon" width="30px" />
      <img src={linkedIcon} alt="instagram-icon" width="30px" />
    </div>
  );
};

export default SoMeIcons;
