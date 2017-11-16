var http = require('http');
var url = require("url");
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var mymodule = require('./mymodule');



var server = http.createServer(function(req,res){
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;
    var game = new EventEmitter();  
    console.log(page);
    mymodule.sayHello();
    game.on('gameover', function(message){
        console.log(message);

    })
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('firstname' in params && 'lastname' in params){
        res.write('Your name is '+ params['firstname']+ ' ' + params['lastname']);
    }
    else{
        res.write('You do have a first name and a last name, don\'t you?');
        game.emit('gameover','You loose!');
    }
    if (page == '/') {
    res.write('\nYou\'re at the reception desk. How can I help you?');
    }
    else if (page == '/basement') {
    res.write('You\'re in the wine cellar. These bottles are mine!');
    }
    else if (page == '/floor/1/bedroom') {
    res.write('Hey, this is a private area!');
    }
    else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        server.close();
    }
    res.end();

    server.on('close', function(){
        console.log("Goodbye");
        mymodule.sayGoodbye();
    })
});
server.listen(8080);