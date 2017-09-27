var concatStream = require('concat-stream');
var http = require('http');

var urls = process.argv.slice(2);
var results = [];
var resultsCount = 0;

// Works when using 'let' keyword (ES6)
for(let i = 0; i < urls.length; i++) {
    http.get(urls[i], function(res) {
        res.setEncoding('utf8');
            
        res.pipe(concatStream(function(data) {
            results[i] = data;
            resultsCount++;
                
            if(resultsCount === urls.length) {
                results.forEach(function(result) {
                    console.log(result); 
                });
            }
            }));
    });
}

// urls.forEach(function(url, i) {
//     http.get(url, function(res) {
//         res.setEncoding('utf8');
        
//         res.pipe(concatStream(function(data) {
//             results[i] = data;
//             resultsCount++;
            
//             if(resultsCount === urls.length) {
//                 results.forEach(function(result) {
//                     console.log(result);
//                 });
//             }
//         }));
//     });
// });
