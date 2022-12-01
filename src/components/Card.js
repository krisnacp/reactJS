import "./Card.css";
import map from "../assets/icons/map-pink.svg";

function Card(props) {
    // console.log(props.datas);
    return (
        <div className="card">
            <img
                className="card-img"
                src={props.datas.imgSrc}
                alt={props.datas.place}
            />
            <div className="card-details">
                <div className="location">
                    <img
                        className="location-icon"
                        src={map}
                        alt="icon of map"
                    />
                    <h4>{props.datas.country}</h4>
                    <a
                        className="location-google"
                        target="blank"
                        href={props.datas.map}
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">{props.datas.place}</h1>
                <h3 className="date-range">{props.datas.details.dateRange}</h3>
                <p className="desc">{props.datas.details.description}</p>
            </div>
        </div>
    );
}

export default Card;
