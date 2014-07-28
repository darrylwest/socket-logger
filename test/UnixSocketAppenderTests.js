/**
 * @class UnixSocketAppenderTests
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/28/14 2:46 PM
 */
var should = require('chai').should(),
    dash = require( 'lodash' ),
    Logger = require('simple-node-logger').Logger,
    UnixSocketAppender = require( '../lib/UnixSocketAppender' );

describe('UnixSocketAppender', function() {
    'use strict';

    var createLogger = function() {
        var opts = {};

        opts.domain = 'MyDomain';
        opts.category = 'MyCategory';
        opts.level = 'debug';

        return new Logger( opts );
    };

    var createOptions = function() {
        var opts = {};

        opts.level = 'debug';

        return opts;
    };

    describe('#instance', function() {
        var appender = new UnixSocketAppender( createOptions() );

        it('should create an instance of UnixSocketAppender', function() {
            should.exist( appender );
            appender.should.be.instanceof( UnixSocketAppender );
        });
    });
});