'use strict';

/**
 * @ngdoc service
 * @name tmdbApp.tmdbData
 * @description
 * # tmdbData
 * Service in the tmdbApp.
 */
angular.module('tmdbApp')
  .service('tmdbData', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    self.BASE_URL= "https://api.themoviedb.org/3/";
    self.search = function (query) {
      return $http.jsonp(self.BASE_URL+query);
    }
    self.setQuery= function(queryString){
      self.queryString= queryString;
    }
    self.getQuery= function(){
      return self.queryString;
    }
    return self;
  });
