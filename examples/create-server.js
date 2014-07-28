#!/usr/bin/env node 

// TODO create a LogManager with a set domain (LogServer), appenders( RollingFileAppender, FileAppender), and a dynamic conf.js reader to read log levels
var SocketLogger = require('../lib/SocketLogger'),
    opts = {},
    server;

opts.socketFile = '/tmp/socket-logger-test.sock';

server = new SocketLogger( opts ).createServer();
server.start();

