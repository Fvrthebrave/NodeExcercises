var http = require('http');
var url = require('url');

var port = process.argv[2];

// Start server
http.createServer(function(req, res) {
    
    //create a url object out of the data parsed from the url.
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    var startTime = urlObj.query.iso;
    var result;
    
    // Checks for the path names we are looking for.
    if(pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
    } else if(pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
    }
    
    // If we have successfully received a result...
    if(result) {
        res.writeHead(200, {'content-type' : 'application/json'});
        
        res.end(JSON.stringify(result));
    
    // If we have not successfully received a result...
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(port);

function getTimeStamp(startTime) {
    return Date.parse(startTime);
}

function getUnixTimeStamp(startTime) {
    return {
        unixtime: getTimeStamp(startTime)
    };
}

function getTimeObj(startTime) {
    var date = new Date(getTimeStamp(startTime));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}