import "./Footer.css";
import twitter from "./assets/icons/twitter-square-gray.svg";
import facebook from "./assets/icons/facebook-square-gray.svg";
import instagram from "./assets/icons/instagram-square-gray.svg";
import github from "./assets/icons/github-square-gray.svg";

function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </footer>
    );
}

export default Footer;
