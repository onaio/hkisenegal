/*global angular */
(function(){
    'use strict';

    angular.module('hkipecsApp')
      .service('OnadataService', ["$resource", function Onadataservice($resource) {
          return $resource(
              'http://:site/api/v1/stats/submissions/:user/:formid',
              {user: 'demouser', formid: 'formid', site: 'ona.io'},
              {query: {method: 'GET', params: {group: 'enqueteur'}, withCredentials: true, isArray: true}}
          );
      }]);
})();
