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
                .when('/meres', {
                    templateUrl: 'views/meres.html',
                    controller: 'meresCtrl'
                })
                .when('/personnel', {
                    templateUrl: 'views/meres.html',
                    controller: 'personnelCtrl'
                })
                .when('/agents', {
                    templateUrl: 'views/meres.html',
                    controller: 'agentsCtrl'
                })
                .otherwise({
                    redirectTo: '/meres'
                });
        }]);
})();
