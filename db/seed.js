const { Hike } = require("../models");

// starter data 

Hike.deleteMany({}, function (error, deletedHikes) {
    if (error) {
        return console.log(error);
    }
Hike.insertMany(
[
    {
        image: "https://www.wta.org/site_images/hikes/little-si-fog.jpg/@@images/df1794a5-7267-41e7-8da0-97e32ec08992.jpeg",
        hikeName: "Little Si",
        location: "North Bend",
        length: 4.7, 
        elevationGain: 1300,
    },
       
    {
        image: "https://www.twinsmomdiary.com/wp-content/uploads/2020/07/IMG_1023.jpg",
        hikeName: "Snow Lake",
        location: "Snoqualmie Pass",
        length: 7.2, 
        elevationGain: 1800,
    },
    {
        image: "https://www.wta.org/site_images/hikes/poopoopointwta.jpg-1/@@images/b0a45363-b575-4f04-9bd4-8f57f9740254.jpeg",
        hikeName: "Poo Poo Point",
        location: "Issaquah Foothills",
        length: 7.2, 
        elevationGain: 1858,
    },
],
function (error, createdHikes) {
    if (error) {
        return console.log(error);
    }
    console.log("Hike data added");
    }
);
});