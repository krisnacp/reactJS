import Card from "./Card";
import "./CardContainer.css";
import datas from "../data";

function CardContainer() {
    const dataCard = datas.map((data) => {
        return (
            <Card
                id={data.id}
                // card_img={data.cardImg}
                // status="SOLD OUT"
                // score={data.stats.rating}
                // total_review={data.stats.reviewCount}
                // desc={data.title}
                // price={data.price}
                // location={data.location}
                // open_spots={data.openSpots}
                datas={data}
            />
        );
    });

    return (
        <div className="card-container">
            {dataCard}
            {/*Instance Card dibawah ini merupakan contoh dari penerapan "props" dengan cara 'hard-coded' atau tulis manual*/}
            {/* <Card
                card_img={i1}
                status="SOLD OUT"
                score="5.0"
                total_review="6"
                desc="Life lesson with Roronoa Zoro"
                price="136"
            />
            <Card
                card_img={i2}
                status="ONLINE"
                score="5.0"
                total_review="30"
                desc="Learn monochrome photography"
                price="125"
            />
            <Card
                card_img={i3}
                status="ONLINE"
                score="4.8"
                total_review="2"
                desc="Japanese Sakura bloom"
                price="50"
            /> */}
        </div>
    );
}

export default CardContainer;
