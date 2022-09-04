import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import CardContainer from "./components/CardContainer";
function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <CardContainer />
        </div>
    );
}

export default App;
