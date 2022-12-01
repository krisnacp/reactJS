import logoGray from "./logo-gray.svg";
import "./MainSection.css";

function MainSection() {
    return (
        <div className="main-section-container">
            <h1 className="section-title">Fun facts about React</h1>
            <ul className="section-list">
                <li>
                    <span>Was first released in 2013</span>
                </li>
                <li>
                    <span>Was originally created by Jordan Walke</span>
                </li>
                <li>
                    <span>Has over 100K stars on Github</span>
                </li>
                <li>
                    <span>Is maintained by Facebook</span>
                </li>
                <li>
                    <span>
                        Powers thousand of enterprise apps, including mobile
                        apps
                    </span>
                </li>
            </ul>
            <img className="section-logo" src={logoGray} alt="Reac Logo" />
        </div>
    );
}

export default MainSection;
