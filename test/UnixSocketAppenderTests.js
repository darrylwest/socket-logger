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

    var MockSocketClient = function() {
        var mock = this,
            messageCount = 0;

        this.send = function(obj) {
            messageCount++;
            return obj;
        };

        this.getMessageCount = function() {
            return messageCount;
        };
    };

    var createOptions = function() {
        var opts = {};

        opts.level = 'debug';
        opts.socketClient = new MockSocketClient();

        return opts;
    };

    describe('#instance', function() {
        var appender = new UnixSocketAppender( createOptions() ),
            methods = [
                'write',
                'getTypeName',
                'formatEntry',
                'formatLevel',
                'formatTimestamp'
            ];

        it('should create an instance of UnixSocketAppender', function() {
            should.exist( appender );
            appender.should.be.instanceof( UnixSocketAppender );
        });

        it('should have all expected methods by size and type', function() {
            dash.methods( appender ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                appender[ method ].should.be.a( 'function' );
            });
        });
    });

    describe('write', function() {
        var logger = createLogger();

        it('should write a formatted json entry', function() {
            var opts = createOptions(),
                socketClient = opts.socketClient,
                appender = new UnixSocketAppender( opts ),
                entry = logger.createEntry('info', [ 'this is a test, time: ', new Date() ] );

            socketClient.getMessageCount().should.equal( 0 );
            appender.write( entry );
            socketClient.getMessageCount().should.equal( 1 );
        });
    });
});