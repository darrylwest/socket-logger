/**
 * @class Logger
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/5/14 6:28 PM
 */
var Logger = function(options) {
    'use strict';

    var logger = this,
        domain = options.domain,
        category = options.category,
        level = options.level || Logger.DEFAULT_LEVEL;

    this.log = function(level, msg) {
        var entry = {};

        entry.ts = Date.now();

        if (domain) entry.domain = domain;
        if (category) entry.category = category;

        entry.level = level;

        entry.msg = msg;

        // fire an event?
    };
};

Logger.STANDARD_LEVELS = [ 'all', 'trace', 'debug', 'info', 'warn', 'error', 'fatal' ];
Logger.DEFAULT_LEVEL = 'info';

module.exports = Logger;
