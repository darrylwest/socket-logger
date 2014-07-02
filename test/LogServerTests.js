/**
 * @class LogServerTests
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 7:24 PM
 */
var should = require('chai').should(),
    dash = require('lodash' ),
    LogServer = require('../lib/LogServer' );

describe('LogServer', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.socketFile = '/tmp/test.logger.sock';

        return opts;
    };

    describe('#instance', function() {
        var server = new LogServer( createOptions() ),
            methods = [
                'start',
                'messageHandler'
            ];

        it('should create an instance of LogServer', function() {
            should.exist( server );
            server.should.be.instanceof( LogServer );

        });

        it('should have all expected methods by size and type', function() {
            dash.methods( server ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                server[ method ].should.be.a( 'function' );
            });
        });
    });
});
