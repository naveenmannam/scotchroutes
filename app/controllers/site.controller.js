var path = require('path');
module.exports.siteController = {
	showRoot,
	showContact,
	postContact,
	showAbout,
	showFriends
};

function showRoot(req, res) {
    res.sendFile(path.join(__dirname, '../..index.html'));
};

function showContact(req, res) {
    res.sendFile(path.join(__dirname, "../..contact.html"));
}

function postContact(req, res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    res.send("<h1> Full Name : " + fname + " " + lname + "</h1>");
}

function showAbout(req, res) {
    res.sendFile(path.join(__dirname, '../..about.html'));
}

function showFriends(req, res) {
    res.sendFile(path.join(__dirname, '../..friends.html'));
}

function postError(req, res, next) {
    res.send("404 Page Not Find!!!");
    next();
}

