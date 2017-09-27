var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res) {
    
    /* https://nodejs.org/api/http.html#http_response_getheader_name for documentation. */
    res.writeHead(200, {'content-type' : 'text/plain'});
   
    // Creates a file stream and sends that as our response stream.
    fs.createReadStream(file).pipe(res);
}).listen(port);