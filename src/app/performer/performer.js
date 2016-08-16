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
        templateUrl: 'performer/performer.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });

})

.controller('performerCtrl', function($scope, $stateParams, $restURL, restfulService){

  console.log($stateParams);

  restfulService.getPerformerPerformances().then(function(value) {
    console.log("Promise work");
    console.log(value);
    value.forEach(function(v) {
      console.log(v);
    });
  });

  
});