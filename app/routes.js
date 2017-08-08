const express = require('express');
const router = express.Router;

module.exports = router;

// Main route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact route
router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});

router.post("/contact", (req, res) => {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    res.send("<h1> Full Name : " + fname + " " + lname + "</h1>");
    // res.sendFile(path.join(__dirname, "contact.html"));
});


// About route
router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});


// Friends route
router.get("/friends", (req, res) => {
    res.sendFile(path.join(__dirname, 'friends.html'));
});

router.get("/:profile", (req, res) => {
    var stat = req.params.profile;
    res.send("<h1 style='text-align: center'>" + stat.toUpperCase() + " 404 Page not found </h1>");
});