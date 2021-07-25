// DB Connection
require("./config/db.connection");

// external modules 
const express = require("express");


// instance express package
const app = express();

// Port connection
const PORT = 4000;

// Bind server to port
app.listen(PORT, function () {
    console.log(`Hey, I am alive and well at port ${PORT}!`);
});

