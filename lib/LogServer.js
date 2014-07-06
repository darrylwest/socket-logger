/**
 * @class LogServer
 * @classdesc LogServer reads log messages from the socket, formats and writes to the rolling log file.
 *
 * @author: darryl.west@raincitysoftware.com
 * @created: 7/1/14 7:22 PM
 */

var LogServer = function(options) {
    'use strict';

    var logServer = this,
        socketServer = options.socketServer,
        logger = options.logger;

    this.start = function() {
        // create the destination writer

        socketServer.start();

        socketServer.onMessage( logServer.messageHandler );

        // TODO implement in a public method to enable getting socket for writeback
        socketServer.onClientConnection( function(socket) {
            socketServer.getWriter().send('client log connection accepted', socket);
        });
    };

    this.messageHandler = function(message) {
        console.log( message );
    };
};

module.exports = LogServer;