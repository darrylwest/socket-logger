/**
 * @class ConsoleAppender
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/6/14 12:18 PM
 */
var should = require('chai').should(),
    dash = require( 'lodash' ),
    casual = require( 'casual' ),
    Logger = require('../lib/Logger' ),
    ConsoleAppender = require('../lib/ConsoleAppender');

describe('ConsoleAppender', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.level = 'debug';

        return opts;
    };

    describe('#instance', function() {
        var appender = new ConsoleAppender( createOptions() ),
            methods = [
                'formatter',
                'write'
            ];

        it('should create an instance of ConsoleAppender', function() {
            should.exist( appender );
            appender.should.be.instanceof( ConsoleAppender );

        });

        it('should have all expected methods by size and type', function() {
            dash.methods( appender ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                appender[ method ].should.be.a( 'function' );
            });
        });
    });
});
