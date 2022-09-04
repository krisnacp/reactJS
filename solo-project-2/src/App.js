import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import TravelData from "./assets/TravelData";

function App() {
    const fillCard = TravelData.map((data) => {
        return <Card id={data.id} datas={data} />;
    });
    return (
        <div className="App">
            <Navbar />
            {fillCard}
        </div>
    );
}

export default App;
