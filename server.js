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
app.use(methodOverride('_method'));

// Routes

// Index GET 
app.get('/', function(req, res) {
    res.send('<h1>Hikes will be posted here</h1>');
  });

// New GET /hikes/new
// use should be able to add a new hike

// Create POST /hikes
// new hike should then post to page

// Show GET /hikes/:id

// Edit GET /hikes/:id/edit

// Update PUT /hikes/:id

// Destroy DELETE /hikes/:id

// 404

app.get("/*", function (req, res){
    const context = { error: req.error };
    res.render("404", context);
});

// Bind server to port
app.listen(PORT, function () {
    console.log(`Hey, I am alive and well at port ${PORT}!`);
});

