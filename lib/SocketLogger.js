/**
 * @class SocketLogger
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 5:03 PM
 */
var SocketModel = require('socket-model' ),
    LogServer = require( './LogServer' ),
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
        // create and return a log server
    };

    this.createLogManager = function(domain) {
        // create and return the log manager
    };

    // constructor validations
    if (!socketFile) throw new Error('socket server must be constructed with a unix socket file');
};

module.exports = SocketLogger;