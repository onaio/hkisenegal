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


pecsApp.controller('guineaCtrl', function ($scope, $http) {

    $scope.survey = {};
    $scope.country = "Guinea";
    // get data from bamboo
    $http({
        method: 'GET',
        url: 'http://bamboo.io/datasets/466f34232d114b0ba565fa1a68d21d9c'
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
        url: 'http://bamboo.io/datasets/5b8f5251edb8446691a6e7b7c75cedb2'
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
        url: 'http://bamboo.io/datasets/cb7ac6d280894601adf13fd2ab6b4a5c'
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
        url: 'http://bamboo.io/datasets/3bff0129813f47509acfdbeaacb1b94c'
    })
        .success(function (data, status, headers, config) {
            // See here, we are now assigning this username
            // to our existing model!
            $scope.survey_dates = data;
        })
        .error(function (data, status, headers, config) {
            // something went wrong :(
        });


});