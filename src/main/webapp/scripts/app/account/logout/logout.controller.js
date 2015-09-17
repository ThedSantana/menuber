'use strict';

angular.module('menuberApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
