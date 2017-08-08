var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

module.exports = router;

router.use(bodyParser.urlencoded({ extender: true}));

// Main route
router.get("/",         showRoot);
router.get("/contact",  showContact);
router.post("/contact", postContact);
router.get("/about",    showAbout);
router.get("/friends",  showFriends);
router.use(postError);

function showRoot(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
};

function showContact(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
}

function postContact(req, res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    res.send("<h1> Full Name : " + fname + " " + lname + "</h1>");
}

function showAbout(req, res) {
    res.sendFile(path.join(__dirname, '../about.html'));
}

function showFriends(req, res) {
    res.sendFile(path.join(__dirname, '../friends.html'));
}

function postError(req, res, next) {
    res.send("404 Page Not Find!!!");
    next();
}

