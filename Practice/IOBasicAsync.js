// Asynchronous read file

var fs = require("fs");

fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data.split('\n').length - 1);
        
        // This will allow you to actually acquire the data...
        return callback(data.split('\n').length - 1);
    }
});
