module.exports = (function() {
    'use strict';
    var htmlExternalRoutes = require('express').Router();
    var path = require("path");

    htmlExternalRoutes.get('/survey', function (req, res) {
        console.log("Survey.html is active");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    htmlExternalRoutes.get('/', function (req, res) {
        console.log("home.html is active");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    return htmlExternalRoutes;
})();




// var svr = require("../svr.js");

// svr.app.get("/survey", function(req, res) {
//     res.sendFile(svr.path.join(svr.__dirname, "/public/survey.html"));
//   });

// svr.app.get("*", function(req, res) {
//     res.sendFile(svr.path.join(svr.__dirname, "/public/home.html"));
//   });


  