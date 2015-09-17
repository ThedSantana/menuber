 'use strict';

angular.module('menuberApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-menuberApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-menuberApp-params')});
                }
                return response;
            },
        };
    });