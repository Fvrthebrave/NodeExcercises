var fs = require('fs');

var dir = process.argv[2];
var path = require('path');

fs.readdir(dir, function(err, list) {
    if(err) {
        console.log(err);
    } else {
        list.forEach(function(item) {
            if(path.extname(item) === '.' + process.argv[3]) {
                console.log(item);
            }
        });
    }
});