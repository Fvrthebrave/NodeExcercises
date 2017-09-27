var fs = require('fs');
var path = require('path');

function filterDir(directory, extension, callback) {
    var filteredList = [];
    
    fs.readdir(directory, function(err, list) {
        if(err) {
           return callback(err);
        } 
        
        // Checks the extension of each file in the directory.
        list.forEach(function(listItem) {
            // Adds file to the array if the extension matches.
            if(path.extname(listItem) === '.' + extension) {
               filteredList.push(listItem);
           } 
        });
        
        // Returns gathered data to the callback function.
        return callback(null, filteredList);
    });
}

module.exports = filterDir;