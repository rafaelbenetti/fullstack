(function () {
    'use strict';

    var HomeService = function () {

        var login = function (user) {
            console.log('Trying login with user: ' + JSON.stringify(user));
        };

        var contact = function (contact) {
            console.log('Sendying a contact message: ' + JSON.stringify(contact));
        };

        return {
            login: login,
            contact: contact
        };
    };

    module.exports = HomeService;
})();