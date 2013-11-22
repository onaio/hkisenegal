/*global console, angular */
(function(){
    'use strict';


    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('cameroonCtrl', function ($scope, $http) {

        $scope.survey = {};
        $scope.area = {};
        $scope.country = "Cameroon";
        // get data from bamboo
        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/16ca62fbb8254ae69aa5ec38929d2f8b'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.survey = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/045e22bfdb2143a7b2d51e025a81e010'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.area = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/b23d2ad0efc84379994e9389c87719bb'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.summary = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });


    });


    pecsApp.controller('burkinaCtrl', function ($scope, $http) {

        $scope.survey = {};
        $scope.country = "Burkina Faso";
        // get data from bamboo
        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/051b9b737d7b4622b2542667bfe416fc'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.survey = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/bc6e118e59e141cc96163a0394bcf0c4'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.area = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/3b1a363b9f0846e3bbd7f6cc09218a96'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.summary = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/0042a1b4d6bb4c708ab2b770ae4384b6'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.survey_dates = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/ad848bd3f6ab4ca69a7a4171d87543b9'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.equipes = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });


    });


    pecsApp.controller('guineaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token b632f0b82d0a888f03f3c747dc8db7b79af9f581';

        $scope.survey = {};
        $scope.country = "Guinea";
        // get form info from ona.io
        var query = {
            group: 'enqueteur',
            user: 'ukanga',
            formid: 'Meres_gardiennes_15-11-13',
            site: 'ukw530:8000'
        };
        $scope.survey = ona.query(query);
        $scope.enqueteurGrid = {data: 'survey',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'day';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'day', displayName:'Date'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'village';
        $scope.area = ona.query(query);
        $scope.villageGrid = {data: 'area',
            columnDefs: [{field:'village', displayName:'Village'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);
})();
