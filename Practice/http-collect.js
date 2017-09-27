var concatStream = require('concat-stream');
var http = require('http');

var url = 'http://www.google.com';

http.get(url, function(res) {
    res.setEncoding('utf8');
    
    // Takes all of the data and essentially turns it into one 'string'.
    res.pipe(concatStream(function(data) {
       console.log(data.length);
       console.log(data);
    }));
});
