'use strict';

/**
 * @ngdoc directive
 * @name tmdbApp.directive:result
 * @description
 * # result
 */
angular.module('tmdbApp')
  .directive('result', function () {
    return {
      templateUrl: 'views/result.tpl.html',
      restrict: 'E',
      
    };
  });
