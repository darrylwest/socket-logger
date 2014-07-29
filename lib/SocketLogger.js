/**
 * @class SocketLogger
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 5:03 PM
 */
var SocketModel = require('socket-model' ),
    LogServer = require( './LogServer' ),
    LogManager = require( './LogManager' ),
    ConsoleAppender = require('simple-node-logger' ).appenders.ConsoleAppender,
    UnixSocketAppender = require('./UnixSocketAppender' ),
    dash = require('lodash');

var SocketLogger = function(options) {
    'use strict';

    var socketLogger = this,
        socketFile = options.socketFile;

    /**
     * create and return the log server
     * @param opts
     */
    this.createServer = function(opts) {
        if (!opts) {
            opts = {};
        }


        // TODO create a file logger for the socket server
        opts.socketFile = socketFile;
        opts.socketServer = SocketModel.createServer( opts );

        // create at least one RollingFileAppender
        // opts.appenders = createAppenders();

        var server = new LogServer( opts );

        return server;
    };

    /**
     * log manager creates client loggers for the given domain/application
     *
     * @param opts
     */
    this.createLogManager = function(opts) {
        return new LogManager( opts );
    };

    var createUnixSocketAppender = function() {
        var opts = {};

        opts.socketClient = createSocketClient();

        return new UnixSocketAppender( opts );
    };

    var createSocketClient = function() {
        var opts = {};

        opts.socketFile = socketFile;

    };

    // constructor validations
    if (!socketFile) throw new Error('socket server must be constructed with a unix socket file');
};

module.exports = SocketLogger;