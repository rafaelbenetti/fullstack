(function () {
    'use strict';

    var homeService = function ($q, $http, urlSettingsFactory) {

        var login = function (user) {
            var deffered = $.defer();
            $http.post(urlSettingsFactory.getUrlToLogin(), user)
                .then(function (response) {
                    deffered.resolve(response);
                });

            return deffered.promise;
        };

        var contact = function(contact) {

            var deferred = $.defer();
            $http.post(urlSettingsFactory.getUrlToContact(), contact)
                .then(function(response) {
                    deferred.resolve(response);
                });

            return deffered.promise;
        };

        var sayHello = function() {
            return 'hello my friend.'
        };

        return {
            login,
            contact,
            sayHello
        }
    };

    angular.module('fullstack').service('homeService', [
        '$q',
        '$http',
        'urlSettingsFactory',
        homeService
    ]);

})();