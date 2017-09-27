// This will log all files within the path with the matching extension passed
// as an argument from the console...

var fs = require('fs');
var path = require('path');

fs.readdir('./', function(err, list) {
    if(err) throw err;
    
    list.forEach(function(listItem) {
        
        // We check the filename with a preceding '.' as we expect the
        // user to enter 'text' etc. as the arugment.
        if(path.extname(listItem) === '.' + process.argv[3]) {
          console.log(listItem);
        }
    });
});
