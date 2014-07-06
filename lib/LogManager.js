/**
 * @class LogManager
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/5/14 3:54 PM
 */
var dash = require('lodash');

var LogManager = function(options) {
    'use strict';

    var manager = this,
        domain = options.domain,
        levels = options.levels || [ 'debug', 'info', 'warn', 'error', 'fatal' ],
        loggers = {};

    this.createLogger = function(category, level) {

    };

    this.setAllLevels = function(level) {

    };

    // constructor validations
    if (!domain) throw new Error('log manager must be constructed with a domain/application name');
};

module.exports = LogManager;
