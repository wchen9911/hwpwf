angular.module('haiwaipiaowu.performance', [
    'ui.router'
]).

config(function( $stateProvider ) {

  $stateProvider.state('performance', {
    url : '/performance/:performanceId',
    views : {
      "main":{
        controller : 'performanceCtrl',
        controllerAs: 'performanceCtrl',
        templateUrl: 'performance/performance.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });

})

.controller('performanceCtrl', function($scope, $stateParams, restfulService){
  this.performanceId = $stateParams.performanceId;
  var performanceId  = $stateParams.performanceId;
  $scope.performanceId = $stateParams.performanceId;

  restfulService.getPerformanceDetail(performanceId).then(function(data) {
    console.log(data);
    this.locationId = data.location;
    console.log("Upate value");
    console.log(this.locationId);
  }.bind(this));
  
});