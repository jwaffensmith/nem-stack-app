const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/hiking";

mongoose.connect (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on("connected", function () {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", function (error) {
    console.log(`Mongoose connected error ${error}`);
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected");
});
