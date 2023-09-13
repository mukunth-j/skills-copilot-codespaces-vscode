// Create web server
var express = require('express');
var app = express();
var path = require("path");

//add static files location
app.use(express.static(__dirname + '/public'));

//add route to get index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//add route to get index.html
app.get('/comments', function(req, res) {
    res.sendFile(path.join(__dirname + '/comments.html'));
});

//add route to get index.html
app.get('/comments2', function(req, res) {
    res.sendFile(path.join(__dirname + '/comments2.html'));
});

//start web server on port 8080
app.listen(8080);
console.log("Webserver is listening on port 8080");