var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

http.createServer(function(req, res){
    if(req.method === 'POST') {
        
        // Take the request data and changes the data into a string + uppercase.
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res); // Sends the updated data back to the client as response.
    } 
}).listen(port);
