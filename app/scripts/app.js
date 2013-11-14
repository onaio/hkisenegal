'use strict';

angular.module('hkipecsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/cameroon', {
                templateUrl: 'views/cameroon.html',
                controller: 'cameroonCtrl'
            })
            .when('/burkina', {
                templateUrl: 'views/burkina.html',
                controller: 'burkinaCtrl'
            })
            .when('/guinea', {
                templateUrl: 'views/guinea.html',
                controller: 'guineaCtrl'
            })
            .otherwise({
                redirectTo: '/guinea'
            });
    });
