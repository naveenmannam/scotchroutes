// Get the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
var app = express();
var port = process.env.PORT || 5000;

// Middle ware
app.use(bodyParser.urlencoded({ extended: true }));

// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact route
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});

app.post("/contact", (req, res) => {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    res.send("<h1> Full Name : " + fname + " " + lname + "</h1>");
    // res.sendFile(path.join(__dirname, "contact.html"));
});


// About route
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});


// Friends route
app.get("/friends", (req, res) => {
    res.sendFile(path.join(__dirname, 'friends.html'));
});

app.get("/:profile", (req, res) => {
    var stat = req.params.profile;
    res.send("<h1 style='text-align: center'>" + stat.toUpperCase() + " 404 Page not found </h1>");
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'error.html'));
    next();
});






// Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});