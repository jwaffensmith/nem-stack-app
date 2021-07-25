const { Hike } = require("../models");

// starter data 

Hike.deleteMany({}, function (error, deletedHikes) {
    if (error) {
        return console.log(error);
    }
Hike.insertMany(
[
    {
        hikeName: "Little Si",
        length: 4.7, 
        elevationGain: 1300,
        location: "North Bend",
        image: "https://www.wta.org/site_images/hikes/little-si-fog.jpg/@@images/df1794a5-7267-41e7-8da0-97e32ec08992.jpeg"
    },
    {
        hikeName: "Snow Lake",
        length: 7.2, 
        elevationGain: 1800,
        location: "Snoqualmie Pass",
        image: "https://www.twinsmomdiary.com/wp-content/uploads/2020/07/IMG_1023.jpg"
    },
    {
        hikeName: "Poo Poo Point",
        length: 7.2, 
        elevationGain: 1858,
        location: "Issaquah Foothills",
        image: "https://www.wta.org/site_images/hikes/poopoopointwta.jpg-1/@@images/b0a45363-b575-4f04-9bd4-8f57f9740254.jpeg"
    },
],
function (error, createdHikes) {
    if (error) {
        return console.log(error);
    }
    console.log("Hike data added");
    console.log(createdHikes);
    }
);
});