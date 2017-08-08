// Get the dependencies

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
var app = express();
var port = process.env.PORT || 5000;

// Getting custom routes

var router = require('./app/routes');
app.use(router);

// Middle ware
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'error.html'));
    next();
});


// Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});