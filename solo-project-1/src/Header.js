import profile from "./photoProfile.jpg";
import "./Header.css";

function Header() {
    return (
        <header>
            <img className="card-img" src={profile} alt="Krisna's profile" />
        </header>
    );
}
export default Header;
