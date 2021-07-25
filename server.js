// DB Connection
require("./config/db.connection");

// external modules 
const express = require("express");
const methodOverride = require("method-override");

// instance express package
const app = express();

// Port connection
const PORT = 4000;
app.set("view engine", "ejs");

// internal modules
const Hike = require("./models/Hike");
const hikeData = require("./db/seed");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes

// Index GET /hikes

// New GET /hikes/new

// Create POST /hikes

// Show GET /hikes/:id

// Edit GET /hikes/:id/edit

// Update PUT /hikes/:id

// Destroy DELETE /hikes/:id


// Bind server to port
app.listen(PORT, function () {
    console.log(`Hey, I am alive and well at port ${PORT}!`);
});

