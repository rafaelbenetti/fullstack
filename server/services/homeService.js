(function () {
    'use strict';

    var client = require('redis').createClient();        

    var HomeService = function () {

        var login = function (user) {
            client.set('user', JSON.stringify(user));
            console.log('Trying login with user: ' + JSON.stringify(user));
        };

        var contact = function (contact) {
            client.get('user', function(err, reply) {
                console.log('Contact send by user: ' + reply);
            });
            console.log('Sending a contact message: ' + JSON.stringify(contact));
        };

        return {
            login: login,
            contact: contact
        };
    };

    module.exports = HomeService;
})();