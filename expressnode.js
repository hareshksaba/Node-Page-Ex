var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are in reception');
});

app.listen(8080);