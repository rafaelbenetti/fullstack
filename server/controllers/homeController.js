(function () {
    'use strict';

    var HomeService = require('../services/homeService');
    var homeService = new HomeService();

    module.exports = function (app) {
        var controller = {};

        controller.login = function (req, res) {
            homeService.login(req.body);
            res.json({
                sucess: true
            });
        };

        controller.contact = (req, res) => {
            homeService.contact(req.body);
            res.json({
                sucess: true
            });
        };

        return controller;
    };
})();