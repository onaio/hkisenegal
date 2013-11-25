/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngGrid'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
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
