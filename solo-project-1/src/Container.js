import "./Container.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Container() {
    return (
        <div className="card-container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Container;
