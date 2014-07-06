/**
 *
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/5/14 3:54 PM
 */
var should = require('chai').should(),
    dash = require( 'lodash' ),
    LogManager = require( '../lib/LogManager' );

describe('LogManager', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.domain = 'MyService';

        return opts;
    };

    describe('#instance', function() {
        var manager = new LogManager( createOptions() ),
            methods = [
                'createLogger',
                'setAllLevels'
            ];

        it('should create an instance of LogManager', function() {
            should.exist( manager );
            manager.should.be.instanceof( LogManager );

        });

        it('should have all expected methods by size and type', function() {
            dash.methods( manager ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                manager[ method ].should.be.a( 'function' );
            });
        });
    });
});