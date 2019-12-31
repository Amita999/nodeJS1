const http = require('http');
const port = 3000;
const cback = require ('./callback');
let server =http.createServer();
server.listen(port);
console.log('Server is working on ' + port);