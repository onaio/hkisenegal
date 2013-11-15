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
        url: ''
    })
        .success(function (data, status, headers, config) {
            // See here, we are now assigning this username
            // to our existing model!
            $scope.survey = data;


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
        url: 'http://bamboo.io/datasets/6a481610678d46cc87c6242349354f6c'
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
        url: 'http://bamboo.io/datasets/ac7ba10a924343c6a44c7c86ca164873'
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
        url: 'http://bamboo.io/datasets/90c8f5cca79843b1a81d6aa1b4b52002'
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
        url: 'http://bamboo.io/datasets/3732ba55ddf24126857a17b4083f68e1'
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