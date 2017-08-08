var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var siteController = require('./controllers/site.controller');
var dashController = require('./controllers/dashboard.controller');

module.exports = router;

router.use(bodyParser.urlencoded({ extender: true}));

// Main route
router.get("/",         siteCOntroller.showRoot);
router.get("/contact",  siteCOntroller.showContact);
router.post("/contact", siteCOntroller.postContact);
router.get("/about",    siteCOntroller.showAbout);
router.get("/friends",  siteCOntroller.showFriends);
router.use(siteCOntroller.postError);

router.get('/dash',     dashController.showDash);

