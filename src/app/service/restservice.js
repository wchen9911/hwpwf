angular.module('haiwaipiaowu.service', [

]).

service('restfulService', function($resource) {

  var APIURL = "http://localhost:3000";
  this.getHaha = function() {
    return "HOHO~~~";
  };

  var Performance = $resource(APIURL+'/performances/:subpath/:performerId', {}, {
    getPerformerPerformances: {
      method: 'GET',
      isArray: true,
      params: {subpath: 'performer'}
    },
    test: {
      method: 'GET'
    }
  });

  this.getPerformerPerformances = function() {
    return Performance.getPerformerPerformances({"performerId":1}).$promise;
  };


});
