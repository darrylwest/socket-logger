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
        writer = options.writer;

    if (!typeName) {
        typeName = options.typeName = 'UnixSocketAppender';
    }

    AbstractAppender.extend( this, options );

    /**
     * default formatter for this appender;
     * @param entry
     */
    this.formatter = function(entry) {
        var fields = appender.formatEntry( entry );

        return fields.join( appender.separator );
    };

    /**
     * call formatter then write the entry to the console output
     * @param entry - the log entry
     */
    this.write = function(entry) {
        if (levels.indexOf( entry.level ) >= currentLevel) {
            writer( appender.formatter( entry ));
        }
    };
};

module.exports = UnixSocketAppender;