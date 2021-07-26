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

app.use(function (req, res, next){
    console.log(`${req.url} - ${req.method} : ${new Date().toLocaleString()}`);
    next();
  });

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
// show individual hikes with Id
app.get("/hikes/:id", function (req, res, next){
    Hike.findById(req.params.id, function (error, foundHike){
        if (error) {
            console.log(error);
            req.error = error;
            return next ();
        }
        const context = {
        hike: foundHike,
        };
        return res.render("show", context);
    });
});

// Edit GET /hikes/:id/edit
// user can edit hikes

app.get("/hikes/:id/edit", function (req, res, next){
    Hike.findById(req.params.id, function (error, foundHike){
        if (error) {
            console.log(error);
            req.error = error;
            return next ();
        }
        const context = {
            hike: foundHike,
        };
        return res.render("edit", context);
    });
});


// Update PUT /hikes/:id

app.put("/hikes/:id", function (req, res, next) {
    Hike.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        {
            new: true
        },
       function (error, updatedHike) {
           if (error) {
               console.log(error);
               req.error = error;
               return next();
           }
           return res.redirect(`/hikes/${updatedHike.id}`);
    });
});

// Destroy DELETE /hikes/:id
// user can delete hikes

app.delete("/hikes/:id", function (req, res, next){
    Hike.findByIdAndDelete(req.params.id, function (error, deletedHike) {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }
    return res.redirect("/hikes");
    });
});

// 404

app.get("/*", function (req, res){
    res.send("Sorry, there has been an error.");
});


// Bind server to port
app.listen(PORT, function () {
    console.log(`Hey, I am alive and well at port ${PORT}!`);
});