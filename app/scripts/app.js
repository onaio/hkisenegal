/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.headers.common.Authorization = 'Token b632f0b82d0a888f03f3c747dc8db7b79af9f581';
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
        }]);
})();
