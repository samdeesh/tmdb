'use strict';

/**
 * @ngdoc function
 * @name tmdbApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the tmdbApp
 */
angular.module('tmdbApp')
  .controller('SearchCtrl', function ($routeParams, tmdbData, tmdbConsts) {
    var self = this;
    self.query = "search/movie?api_key="+tmdbConsts.API_KEY+"&query="+ $routeParams.query+ "&callback=JSON_CALLBACK";
    function successHandle(response) {
      console.log(response);
      self.response = response;
    }

    function errorHandle(response) {
      console.error(response);
    }
    tmdbData.search(self.query).then(successHandle, errorHandle);
    
  });
