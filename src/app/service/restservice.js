angular.module('haiwaipiaowu.service', [

]).

service('restfulService', function($resource) {

  var APIURL = "http://localhost:3000";

  var Performance = $resource(APIURL+'/performances/:subpath/:performerId', {}, {
    getPerformerPerformances: {
      method: 'GET',
      isArray: true,
      url: APIURL+'/performances/performer/:performerId'
    },
    getPerformanceDetail: {
      method: 'GET',
      url: APIURL + '/performances/:performanceId'
    },
    test: {
      method: 'GET'
    }
  });

  var Location = $resource(APIURL+'/locations/:locationId', {}, {
    getLocationDetail: {
      method: 'GET'
    }
  });

  this.getPerformerPerformances = function(performerId) {
    return Performance.getPerformerPerformances({"performerId":performerId}).$promise;
  };

  this.getPerformanceDetail = function(performanceId) {
    return Performance.getPerformanceDetail({"performanceId":performanceId}).$promise;
  };

  this.getLocationDetail = function(locationId) {
    return Location.getLocationDetail({locationId: locationId}).$promise;
  };

});
