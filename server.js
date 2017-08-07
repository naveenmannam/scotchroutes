// Get the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var app = express();
var port = process.env.PORT || 5000;



// Main route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});


// About route
app.get("/about", (req, res) => {
    res.send("About Page");
});


// Friends route
app.get("/friends", (req, res) => {
    res.send("Friends Page");
});

app.use((req, res, next) => {
    res.send("404 page not found.")
    console.log("Page not found.");
    next();
});






// Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});