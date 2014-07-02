/**
 * @class SocketLogger
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 5:03 PM
 */
var SocketModel = require('socket-model' ),
    dash = require('lodash');

var SocketLogger = function(options) {
    'use strict';

    var logger = this,
        socketFile = options.socketFile;

    this.createServer = function() {
        // create and return a server
    };

    this.createLogManager = function(domain) {
        // create and return the log manager
    };

    // constructor validations
    if (!socketFile) throw new Error('socket server must be constructed with a unix socket file');
};

module.exports = SocketLogger;