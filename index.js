'use strict';

const hapi_server = require('./server/server');
const server = hapi_server.createServer();
server.start();
console.log('hapi.js server running');
