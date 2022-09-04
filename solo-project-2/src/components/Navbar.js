import "./Navbar.css";
import globe from "../assets/icons/globe-white.svg";

function Navbar() {
    return (
        <nav className="nav">
            <img src={globe} alt="globe icon" />
            <p className="nav-title">my travel journal.</p>
        </nav>
    );
}

export default Navbar;
