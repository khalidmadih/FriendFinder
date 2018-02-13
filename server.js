// Requiring the necessary packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Adding express.js config:

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Adding BodyParser to make it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Pointing the server to the route files for the requests received
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Starting the server on the selected PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
