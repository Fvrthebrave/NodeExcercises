// Synchronous read file

var fs = require('fs');

var text = fs.readFileSync(process.argv[2]);

// Gets the count of new lines within the 'text'
// We need to subtract 1 from the array because there is no '\n' at the end
// of the string we split.
console.log(text.toString().split('\n').length - 1);
