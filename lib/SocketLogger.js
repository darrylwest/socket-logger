/**
 * @class SocketLogger
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 5:03 PM
 */
var SocketModel = require('socket-model' ),
    LogServer = require( './LogServer' ),
    LogManager = require( './LogManager' ),
    dash = require('lodash');

var SocketLogger = function(options) {
    'use strict';

    var logger = this,
        socketFile = options.socketFile;

    /**
     * create and return the log server
     * @param opts
     */
    this.createServer = function(opts) {
        if (!opts) {
            opts = {};
        }

        opts.socketFile = socketFile;
        opts.socketServer = SocketModel.createServer( opts );
        // opts.logger = createLogger();

        var server = new LogServer( opts );

        return server;
    };

    /**
     * log manager creates client loggers for the given domain/application
     *
     * @param domain
     */
    this.createLogManager = function(domain) {
        var opts = {};
        opts.domain = domain;

        return new LogManager( opts );
    };

    // constructor validations
    if (!socketFile) throw new Error('socket server must be constructed with a unix socket file');
};

module.exports = SocketLogger;