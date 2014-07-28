/**
 * @class UnixSocketAppender
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/28/14 2:44 PM
 */
var Logger = require('simple-node-logger').Logger,
    AbstractAppender = require('simple-node-logger').AbstractAppender;

var UnixSocketAppender = function(options) {
    'use strict';

    var appender = this,
        typeName = options.typeName,
        level = options.level || Logger.STANDARD_LEVELS[0],
        levels = options.levels || Logger.STANDARD_LEVELS,
        currentLevel = levels.indexOf( level ),
        socketClient = options.socketClient;

    if (!typeName) {
        typeName = options.typeName = 'UnixSocketAppender';
    }

    AbstractAppender.extend( this, options );

    /**
     * write the complete log entry to the socket client
     *
     * @param entry - the log entry object
     */
    this.write = function(entry) {
        if (levels.indexOf( entry.level ) >= currentLevel) {
            socketClient.send( entry );
        }
    };

    // constructor validations
    if (!socketClient) throw new Error('unix socket appender must be constructed with a socket client');
};

module.exports = UnixSocketAppender;