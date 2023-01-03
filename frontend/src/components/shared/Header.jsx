import HeaderCSS from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({loggedIn, setLoggedIn}) => {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/")  
    }

    return (
        <nav className={HeaderCSS.default}>
            <Link to = "/" className={HeaderCSS.logo}>
                Music Interplay
            </Link>
            <Link to = "/" className={HeaderCSS.linkColor}>
                Home 
            </Link>
            <Link to = "/ensemble" className={HeaderCSS.linkColor}>
                Ensembles 
            </Link>
            <Link to = "/musician" className={HeaderCSS.linkColor}>
                Musicians 
            </Link>
           {!loggedIn && <Link to = "/signup" className={HeaderCSS.signup}>
                Sign up
            </Link>}
            {!loggedIn && <Link to = "/login" className={HeaderCSS.login}>
                Log in
            </Link>}
            {loggedIn && <Link to = "/profile" className={HeaderCSS.linkColor}>
                Profile
            </Link>}
            {loggedIn && <button className={HeaderCSS.logoutButton} onClick={logout}>Log out</button>}
        </nav>
      );
}
 
export default Header;