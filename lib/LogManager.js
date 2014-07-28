/**
 * @class LogManager
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/5/14 3:54 PM
 */
var dash = require('lodash'),
    Logger = require( 'simple-node-logger' ).Logger;

var LogManager = function(options) {
    'use strict';

    var manager = this,
        pid = options.pid || process.pid,
        domain = options.domain,
        dfltLevel = options.dfltLevel || Logger.DEFAULT_LEVEL,
        levels = options.levels || Logger.STANDARD_LEVELS,
        appenders = options.appenders || [],
        loggers = [];

    /**
     * create the managed logger for the given category.  pid and domain are also set
     *
     * @param category
     * @param level
     * @returns new logger instance
     */
    this.createLogger = function(category, level) {
        var logger,
            opts = {};

        opts.pid = pid;
        opts.domain = domain;
        opts.category = category;
        opts.level = level || dfltLevel;

        opts.appenders = appenders;

        logger = new Logger( opts );
        loggers.push( logger );

        return logger;
    };

    /**
     * set all the managed loggers to the specified level
     *
     * @param level see Logger.STANDARD_LEVELS
     */
    this.setAllLevels = function(level) {
        loggers.forEach(function(logger) {
            logger.setLevel( level );
        });
    };

    // constructor validations
    if (!domain) throw new Error('log manager must be constructed with a domain/application name');
};

module.exports = LogManager;
