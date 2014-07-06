/**
 *
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/5/14 6:28 PM
 */
var should = require('chai').should(),
    dash = require('lodash' ),
    Logger = require('../lib/Logger');

describe('Logger', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.category = 'Default';

        return opts;
    };

    describe('#instance', function() {
        var logger = new Logger( createOptions() ),
            methods = [
                'log'
            ];

        it('should create an instance of Logger', function() {
            should.exist( logger );
            logger.should.be.instanceof( Logger );

        });

        it('should have all expected methods by size and type', function() {
            dash.methods( logger ).length.should.equal( methods.length );
            methods.forEach(function(method) {
                logger[ method ].should.be.a( 'function' );
            });
        });
    });
});