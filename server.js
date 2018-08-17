var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiExternalRoutes = require('./app/routing/apiRoutes.js');
app.use('/', apiExternalRoutes);

var htmlExternalRoutes = require('./app/routing/htmlRoutes.js');
app.use('/', htmlExternalRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

