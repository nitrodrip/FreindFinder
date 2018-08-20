//Required npm packages:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express set-up:
var app = express(); 

// Setting the port for the listener:
var PORT = process.env.PORT || 3000; 

//BodyParser to interpret data sent:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Points our server to the "route" files:
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Listener to confirm start of server:
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
