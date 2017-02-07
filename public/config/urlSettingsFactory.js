(function() {
    'use strict';

    var urlSettingsFactory = function() {
        var host = 'http://localhost:3000';

        var getUrlToLogin = function() {
            return host + '/api/login';
        };

        var getUrlToContact = function() {
            return host + '/api/contact';
        };

        return {
            getUrlToLogin,
            getUrlToContact            
        };
    };

    angular.module('fullstack').factory('urlSettingsFactory', [
        urlSettingsFactory
    ]);
})();