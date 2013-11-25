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

    pecsApp.controller('burkinaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token ca87b3231663ca9823a763d19866dfaf0fec5dcc';

        $scope.survey = {};
        $scope.country = "Burkina Faso";
        // get form info from ona.io
        var query = {
            group: 'enqueteur',
            user: 'hkiburkinadata',
            formid: 'mere_enq',
            site: 'ona.io'
        };
        query.name = 'enqueteur';
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
        query.name = 'village';
        $scope.area = ona.query(query);
        $scope.villageGrid = {data: 'area',
            columnDefs: [{field:'village', displayName:'Village'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);


    pecsApp.controller('guineaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token e056d923e8a8a5ccb2fd64cd04e9bcefedc27ab0';

        $scope.survey = {};
        $scope.country = "Guinea";
        // get form info from ona.io
        var query = {
            group: 'enqueteur',
            user: 'hkiguineadata',
            formid: 'Meres_gardiennes_15-11-13',
            site: 'ona.io'
        };
        query.name = 'enqueteur';
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
        query.name = 'village';
        $scope.area = ona.query(query);
        $scope.villageGrid = {data: 'area',
            columnDefs: [{field:'village', displayName:'Village'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'milieu_sous-prefecture';
        query.name = 'milieu_sp';
        $scope.sp = ona.query(query);
        $scope.spGrid = {data: 'sp',
            columnDefs: [{field:'milieu_sp', displayName:'Sous-Prefecture'}, {field:'count', displayName:'# Surveys'}]
        };


    }]);





})();
