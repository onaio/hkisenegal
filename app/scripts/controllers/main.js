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
        url: 'http://bamboo.io/datasets/d1483cb5b7074bc48922b612e01b9ee1'
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
        url: 'http://bamboo.io/datasets/e78afcec70ae45589ddaf8e5c9bd23cc'
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
        url: 'http://bamboo.io/datasets/9a37298d643843c5a62df43b34f27247'
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