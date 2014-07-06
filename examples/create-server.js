#!/usr/bin/env node 

var SocketLogger = require('../lib/SocketLogger'),
    opts = {},
    server;

opts.socketFile = '/tmp/socket-logger-test.sock';

server = new SocketLogger( opts ).createServer();
server.start();

