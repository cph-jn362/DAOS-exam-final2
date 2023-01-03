import HomepageBannerCSS from "./HomepageBanner.module.css"
import MsgIcon from "../../media/msg-icon.png"

const HomepageBanner = () => {
    return ( 
        <div className={HomepageBannerCSS.default}>
            <div className={HomepageBannerCSS.icon}>
                <img src={MsgIcon} alt="msg-icon" width="40px"/>
            </div >
            <div className={HomepageBannerCSS.text}>
                <p className={HomepageBannerCSS.title}>What do you think about Music Interplay?</p>
                <p>We would like to hear from you, if you have any ideas on how we can improve your experience. </p>
            </div>
        </div>
     );
}
 
export default HomepageBanner;