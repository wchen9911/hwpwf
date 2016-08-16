angular.module('haiwaipiaowu.service', [

]).

service('restfulService', function($resource) {

  var APIURL = "http://localhost:3000";
  this.getHaha = function() {
    return "HOHO~~~";
  };

  var Performance = $resource(APIURL+'/performances/', {}, {
    getPerformerPerformances: {
      method: 'GET',
      isArray: true
    }
  });

  this.getPerformerPerformances = function() {
    return Performance.getPerformerPerformances({"dd":1}).$promise;
  };


});
