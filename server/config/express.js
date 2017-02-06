(function () {
    'use strict';

    var express = require('express');
    var load = require('express-load');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var helmet = require('helmet');

    var serverFolder = './server';
    var clientFolder = './public';

    module.exports = function () {

        var app = express();

        app.set('views', clientFolder + '/views');
        app.set('view engine', 'ejs');

        app.use(express.static(clientFolder));
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(helmet());

        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        load('controllers', {
                cwd: serverFolder
            })
            .then('routes')
            .into(app);

        app.get('/', function (req, res) {
            res.render('home');
        });

        app.get('*', function (req, res) {
            res.status(404).render('404');
        });

        return app;
    };
})();