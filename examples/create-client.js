#!/usr/bin/env node


var SocketLogger = require('../lib/SocketLogger'),
    manager,
    log;

manager = new SocketLogger( { socketFile:'/tmp/socket-logger-test.sock' } ).createLogManager('ExampleApp');

log = manager.createSimpleLogger('Example');
log.setLevel('all');

log.trace('trace this...');
log.debug('a debug statement');
log.info('this is an info log');
log.warn('this is a warning');
log.error('an error: ', new Error('my error'));
log.fatal('a really bad fatal error...');

