/**
 * @class SocketLoggerTests
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 5:22 PM
 */
var should = require('chai').should(),
    dash = require('lodash' ),
    SocketLogger = require('../lib/SocketLogger' );

describe('SocketLogger', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.socketFile = '/tmp/test.logger.sock';

        return opts;
    };

    describe('#instance', function() {
        var logger = new SocketLogger( createOptions() ),
            methods = [
                'createServer',
                'createLogManager'
            ];

        it('should create an instance of SocketLogger', function() {
            should.exist( logger );
            logger.should.be.instanceof( SocketLogger );

        });

        it('should have all expected methods by size and type', function() {
            dash.methods( logger ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                logger[ method ].should.be.a( 'function' );
            });
        });
    });
});
