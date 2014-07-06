/**
 * @class LogManager
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/5/14 3:54 PM
 */
var dash = require('lodash'),
    Logger = require('./Logger');

var LogManager = function(options) {
    'use strict';

    var manager = this,
        domain = options.domain,
        dfltLevel = options.dfltLevel || Logger.DEFAULT_LEVEL,
        levels = options.levels || Logger.STANDARD_LEVELS,
        loggers = {};

    this.createLogger = function(category, level) {
        var opts = {};

        opts.domain = domain;
        opts.category = category;
        opts.level = level || dfltLevel;

        return new Logger( opts );
    };

    this.setAllLevels = function(level) {

    };

    // constructor validations
    if (!domain) throw new Error('log manager must be constructed with a domain/application name');
};

module.exports = LogManager;
