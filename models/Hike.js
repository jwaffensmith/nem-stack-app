// require mongoose
const mongoose = require("mongoose");

// schema

const hikeSchema = new mongoose.Schema({
    hikeName: {
        type: String,
        required: [true, "Please enter the name of the hike."]
    },
    length: {
        type: Number,
        required: [true, "Please enter the length of the hike."]
    },
    elevationGain: {
        type: Number,
    },
    location: {
        type: String,
        required: [true, "Please enter the location of the hike"]
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2018/10/13/15/10/mountain-3744351_960_720.jpg"
    },
},
{
    timestamps: true,
}
);

// model 
const Hike = mongoose.model("Hike", hikeSchema);

module.exports = Hike;

