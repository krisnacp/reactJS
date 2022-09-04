import "./Hero.css";
import hero from "../assets/images/fox.jpg";

function Hero() {
    return (
        <div className="hero-container">
            <img src={hero} alt="Fox" className="hero-image" />
            <div className="content-container">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
}

export default Hero;
