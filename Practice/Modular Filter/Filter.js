var fs = require('fs');
var filterDir = require('./filter-module');

var dir = process.argv[2];
var extension = process.argv[3];


filterDir(dir, extension, function(err, data) {
    if(err) {
        console.log('There was an error!');
        
        return err;
    } else  {
        data.forEach(function(listItem) {
           console.log(listItem); 
        });
    }
});

