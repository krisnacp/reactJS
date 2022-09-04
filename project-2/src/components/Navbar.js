import "./Navbar.css";
import airbnb from "../assets/images/airbnbLogo.png";

function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt="airbnb Logo" className="logo" />
        </nav>
    );
}

export default Navbar;
