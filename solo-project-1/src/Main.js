import "./Main.css";
import email from "./assets/icons/mail-black.svg";
import linkedin from "./assets/icons/linkedin-square-white.svg";

function Main() {
    return (
        <main>
            <div className="title-container">
                <h1 className="title">capchipcup</h1>
                <p className="sub-title">Frontend Developer</p>
                <p className="sub-title2">krisnacp.github.io</p>
            </div>
            <div className="button-container">
                <button className="email">
                    <img src={email} alt="email icon" />
                    Email
                </button>
                <button className="linkedin">
                    <img src={linkedin} alt="linkedin icon" />
                    LinkedIn
                </button>
            </div>
            <div className="content-container">
                <div className="wrap">
                    <h3 className="about">About</h3>
                    <p>
                        I am a frontend developer with a particular interest in
                        making things simple and automating daily tasks. I try
                        to keep up with security and best practices, and am
                        always looking for new things to learn.
                    </p>
                </div>
                <div className="wrap">
                    <h3 className="interests">Interests</h3>
                    <p>
                        Food expert. Music scholar. Reader. Internet fanatic.
                        Bacon buff. Entrepreneur. Travel geek. Pop culture
                        ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Main;
