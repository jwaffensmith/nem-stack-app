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
const { Hike } = require("./models");
const hikeData = require("./db/seed");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes

app.get("/", function (req,res){
    res.redirect("./hikes");
});

// Index GET 
app.get("/hikes", function(req, res) {
    Hike.find({}, function (error, allHikes) {
        const context = {
            hikes: allHikes
        };
        res.render("index", context);
    });
});

// New GET /new
// use should be able to add a new hike

app.get("/hikes/new", function (req, res) {
    return res.render("new");
});

// Create POST /hikes
// new hike should then post to page
app.post("/hikes", function (req, res, next) {
   Hike.create(req.body, function (error, createdHike) {
    console.log(createdHike);
    if (error) {
        const context = {
        error,
    };
    return res.render("new", context);
   }
   res.redirect("./hikes")
//return res.redirect(`/hikes/${createdHike.id}`);
   });
});

// Show GET /hikes/:id
// show individual hikes once clicked

// Edit GET /hikes/:id/edit
// user can edit hikes

// Update PUT /hikes/:id

// Destroy DELETE /hikes/:id
// user can delete hikes

// 404

app.get("/*", function (req, res){
    res.send("Sorry, there has been an error.");
});


// Bind server to port
app.listen(PORT, function () {
    console.log(`Hey, I am alive and well at port ${PORT}!`);
});