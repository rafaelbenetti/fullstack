(function () {
    'use strict';

    var homeController = function (homeService, $scope) {
        var self = this;

        var login = function () {
            homeService.login(self.user).then(function (response) {
                if (response.valid.sucess)
                    alert('User logged.');
                else
                    alert('Invalid credentials.');
            });
        };

        var contact = function () {
            homeService.contact(self.contact).then(function (response) {
                if (response.valid.sucess)
                    alert('Contact sent.');
                else
                    alert('Error on send contact. Please try again later.');
            });
        };

        return {
            login,
            contact
        }
    };

    angular.module('fullstack').controller('homeController', ['homeService', '$scope', homeController]);
})();