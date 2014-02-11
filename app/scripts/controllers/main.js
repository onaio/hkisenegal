/*global console, angular */
(function(){
    'use strict';


    var pecsApp = angular.module('hkipecsApp');


    pecsApp.controller('meresCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token c5bb138bfc9210c516ebc02e33e8cc825c76b640';

        $scope.survey = {};
        $scope.country = "Meres_gardiennes_sn";
        // get form info from ona.io
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkisenegaldata',
            formid: '849',
            site: 'ona.io'
        };

        query.group = 'quartier_vill_centre_poste';
        query.name = 'village';
        $scope.village = ona.query(query);
        $scope.villageGrid = {data: 'village',
            columnDefs: [{field:'village', displayName:'Village Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'enqueteur';
        query.name = 'enqueteur';
        $scope.enqueteur = ona.query(query);
        $scope.enqueteurGrid = {data: 'enqueteur',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'byday';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'byday', displayName:'Submission Per Day'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);


    pecsApp.controller('agentsCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token c5bb138bfc9210c516ebc02e33e8cc825c76b640';

        $scope.survey = {};
        $scope.country = "Agents_communautaires_sn";
        // get form info from ona.io
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkisenegaldata',
            formid: '850',
            site: 'ona.io'
        };

        query.group = 'quartier_vill_centre_poste';
        query.name = 'village';
        $scope.village = ona.query(query);
        $scope.villageGrid = {data: 'village',
            columnDefs: [{field:'village', displayName:'Village Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'enqueteur';
        query.name = 'enqueteur';
        $scope.enqueteur = ona.query(query);
        $scope.enqueteurGrid = {data: 'enqueteur',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'byday';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'byday', displayName:'Submission Per Day'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);


    pecsApp.controller('personnelCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token c5bb138bfc9210c516ebc02e33e8cc825c76b640';

        $scope.survey = {};
        $scope.country = "Personnel_de_sante_sn";
        // get form info from ona.io
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkisenegaldata',
            formid: '851',
            site: 'ona.io'
        };

        query.group = 'quartier_vill_centre_poste';
        query.name = 'village';
        $scope.village = ona.query(query);
        $scope.villageGrid = {data: 'village',
            columnDefs: [{field:'village', displayName:'Village Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'enqueteur';
        query.name = 'enqueteur';
        $scope.enqueteur = ona.query(query);
        $scope.enqueteurGrid = {data: 'enqueteur',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'byday';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'byday', displayName:'Submission Per Day'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);

})();
