// Setup
const express = require('express');
const pug = require('pug');
const mongoose = require('mongoose');
const database = require('./config/database');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var port = 3000;
var app = express();


// Configuration
mongoose.connect(database.localUrl);

app.set('views','./app/views');
app.set('view engine', 'pug');

// beautiful render html
app.locals.pretty = true;
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json()); // parse application/json

// Routes
require('./app/routes.js')(app);

// App Running
app.listen(port, function(){
    console.log("App listening on port " + port);
});
