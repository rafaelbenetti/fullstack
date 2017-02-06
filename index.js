(function () {
    'use strict';

    var http = require('http');
    var hostConfig = require('./server/config/hostConfig');
    var app = require('./server/config/express')();

    http.createServer(app).listen(hostConfig.port, hostConfig.address, function () {
        console.log('Node server: http://' + hostConfig.address + ':' + hostConfig.port);
    });
})();