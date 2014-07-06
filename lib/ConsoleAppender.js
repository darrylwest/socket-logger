/**
 * @class ConsoleAppender
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/6/14 12:02 PM
 */
var Logger = require('./Logger');

var ConsoleAppender = function(options) {
    'use strict';

    var appender = this,
        level = options.level || Logger.DEFAULT_LEVEL,
        formatter = options.formatter || this.formatter;

    /**
     * default formatter for this appender;
     * @param entry
     */
    this.formatter = function(entry) {
        var fields = [  ];

        return fields.join(' ');
    };

    /**
     * call formatter then write the entry to the console output
     * @param entry - the log entry
     */
    this.write = function(entry) {
        console.log( appender.formatter( entry ));
    };
};

module.exports = ConsoleAppender;
