var path = require('path');
var bodyParser = require('body-parser');
module.exports = {
    showRoot: showRoot,
    showContact: showContact,
    postContact: postContact,
    showAbout: showAbout,
    showFriends: showFriends,
    postError: postError
};

function showRoot(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
};

function showContact(req, res) {
    res.sendFile(path.join(__dirname, "../../contact.html"));
}

function postContact(req, res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    res.send("<h1> Full Name : " + fname + " " + lname + "</h1>");
}

function showAbout(req, res) {
    res.sendFile(path.join(__dirname, '../../about.html'));
}

function showFriends(req, res) {
    res.sendFile(path.join(__dirname, '../../friends.html'));
}

function postError(req, res, next) {
    res.send("<h1>404 Page Not Find!!!</h1>");
    next();
}