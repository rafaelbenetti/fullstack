(function () {
    'use strict';

    module.exports = function (app) {

        var homeController = app.controllers.homeController;

        app.route('/api/login')
            .post(homeController.login);
        app.route('/api/contact')
            .post(homeController.contact);
    };
})();