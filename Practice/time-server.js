var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
    socket.end(getFormattedTime() +'\n');
});

server.listen(process.argv[2]);

function getFormattedTime() {
    return moment().format('MMM do YY, h:mm:ss a');
}