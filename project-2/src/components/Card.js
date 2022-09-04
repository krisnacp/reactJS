import "./Card.css";
import star from "../assets/icons/star-pink.svg";

/* value yang dikembalikan oleh props bentuknya berupa 'object' */
// function Card(props) {
// console.log(props);
function Card({
    datas,
    /*card_img, score, total_review, desc, price, location, open_spots,*/
    /* di React, kita bisa melakkukan destructuring variable sama seperti yang kita lakukan di vanilla javascript, untuk menspesifikkan variabel yang dimaksud */
}) {
    console.log(datas);
    let badgeText;
    if (datas.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (datas.location === "Online") {
        badgeText = "ONLINE";
    } else if (!datas.location) {
        badgeText = "NOT AVAIL";
    }
    return (
        <div className="card">
            <div className="card-image-container">
                <img
                    // src={props.card_img}, contoh "props", sebelum menggunakan 'destructuring varible'
                    src={datas.cardImg} // "props", dengan destructuring variable, kita tidak perlu memanggil dengan men-chaining variable yang dimaksudkan dengan parameter "props", sama juga dengan yang bisa kita lakukan di vanilla javascript
                    alt="card images"
                    className="card-image"
                />
                {/* "render condition", penjelasannya: saat keadaan dikiri 'truthy' maka code akan dieksekusi, jika 'falsy' maka code tidak akan dieksekusi, contoh dari "render condition": {open_spots === 0 && <p className="status">{badgeText}</p> } */}
                {badgeText && <p className="status">{badgeText}</p>}
            </div>
            <div className="card-content">
                <div className="rating">
                    <img src={star} alt="star icon" className="rating-logo" />
                    <p>
                        {datas.stats.rating}{" "}
                        <span className="rating-score">
                            ({datas.stats.reviewCount}) . {datas.location}
                        </span>
                    </p>
                </div>
                <p className="content-description">{datas.title}</p>
                <h3>
                    From ${datas.price} <span className="price">/ person</span>
                </h3>
            </div>
        </div>
    );
}

export default Card;
