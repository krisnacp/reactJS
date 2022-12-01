// pembuatan data.js dilakukan untuk mengelompokkan data yang akan di pakai di aplikasi nantinya
const data = [
    {
        id: 1,
        cardImg: "./images/3faces.jpg",
        title: "Life lesson with Roronoa Zoro",
        description: "If you're excited with this lesson, go with it.",
        price: 136,
        stats: {
            rating: 5.0,
            reviewCount: 6,
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        cardImg: "./images/statue.jpg",
        title: "Learn monochrome photography",
        description:
            "If you're excited with this lesson, subscribe as soon as possible.",
        price: 125,
        stats: {
            rating: 5.0,
            reviewCount: 30,
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        cardImg: "./images/singleStatue.jpg",
        title: "Japanese Sakura bloom",
        description: "If you're excited with this, grab it.",
        price: 50,
        stats: {
            rating: 4.8,
            reviewCount: 2,
        },
        // location: "Online",
        openSpots: 18,
    },
];

export default data;
