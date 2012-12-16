var path = require('path');
var connect = require('connect');
connect.createServer(
    connect.static(path.join(__dirname, '_site'))
).listen(9000);
