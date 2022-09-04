/*Cara menggunakan logo adalah dengan meng-importnya dari file lokasi logo berada*/
import logo from "./logo.svg";
/*Pada penerapan Components di ReactJS, styling-nya juga bisa dilakukan secara teripsah*/
import "./Header.css";
function Header() {
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="React logo" />
                <h1 className="logo-desc">ReactFacts</h1>
            </div>
            <div className="course-container">
                <p className="course">React Course - Project 1</p>
            </div>
        </header>
    );
}

export default Header;
