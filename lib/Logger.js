/**
 * @class Logger
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/5/14 6:28 PM
 */
var Logger = function(options) {
    'use strict';

    var logger = this,
        domain = options.domain,
        category = options.category,
        level = options.level || Logger.DEFAULT_LEVEL,
        levels = options.levels || Logger.STANDARD_LEVELS,
        currentLevel = levels.indexOf( level),
        appenders = options.appenders || [];

    /**
     * log the statement message
     *
     * @param level the level of this message
     * @param msg
     */
    this.log = function(level, msg) {
        var entry = {};

        entry.ts = Date.now();

        if (domain) entry.domain = domain;
        if (category) entry.category = category;

        entry.level = level;

        entry.msg = msg;

        process.nextTick(function() {
            // send the message to the appenders...
            appenders.forEach(function(appender) {
                appender.append( entry );
            });
        });
    };

    /**
     * set the level
     *
     * @param lvl one of the recognized logger levels
     */
    this.setLevel = function(lvl) {
        currentLevel = levels.indexOf(lvl);
        level = lvl;
    };

    /**
     * return the current level string
     */
    this.getLevel = function() {
        return level;
    };

    this.setAppenders = function(app) {

    };

    this.addAppender = function(appender) {

    };

    this.removeAppender = function(appender) {

    };

    this.getAppenders = function() {
        return appenders;
    };

    // now initialize the methods for the standard levels
    var init = function() {
        levels.forEach(function(lvl) {
            logger[ lvl ] = function() {
                var n = levels.indexOf( lvl );
                if (n >= currentLevel) {
                    logger.log( lvl, arguments );
                }
            };
        });
    };
};

Logger.STANDARD_LEVELS = [ 'all', 'trace', 'debug', 'info', 'warn', 'error', 'fatal' ];
Logger.DEFAULT_LEVEL = 'info';

module.exports = Logger;
