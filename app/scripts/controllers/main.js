'use strict';

/**
 * @ngdoc function
 * @name tmdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmdbApp
 */
angular.module('tmdbApp')
  .controller('MainCtrl', function ($location) {
    var self = this;
    self.search= function(){
      $location.path("/search/"+self.query);
    }
  });
