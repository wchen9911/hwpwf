

angular.module('haiwaipiaowu.performer', [
    'ui.router',
    'configFactory',
    'ngResource'
]).

config(function( $stateProvider ) {

  $stateProvider.state('performer', {
    url : '/performer/:performerId',
    views : {
      "main":{
        controller : 'performerCtrl',
        controllerAs : 'perfCtr',
        templateUrl: 'performer/performer.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });

})

.controller('performerCtrl', function($scope, $state, $stateParams, restfulService){
  this.performanceList = [];
  
  restfulService.getPerformerPerformances($stateParams.performerId).then(function(value) {
    this.performanceList = value;
    console.log(value);
  }.bind(this));

  this.gotoPerformance = function (performance) {
    console.log(performance);
    $state.go('performance', {performanceId: performance._id});
  };

});
