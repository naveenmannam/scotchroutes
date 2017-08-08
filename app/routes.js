var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var siteController = require('./controllers/site.controller');
var dashController = require('./controllers/dashboard.controller');

module.exports = router;

router.use(bodyParser.urlencoded({ extender: true}));

// Main route
router.get("/",         siteController.showRoot);
router.get("/contact",  siteController.showContact);
router.post("/contact", siteController.postContact);
router.get("/about",    siteController.showAbout);
router.get("/friends",  siteController.showFriends);
router.use(siteCOntroller.postError);

router.get('/dash',     dashController.showDash);

