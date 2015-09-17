'use strict';

angular.module('menuberApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


