angular.module('haiwaipiaowu.attraction', [
    'ui.router'
]).

config(function( $stateProvider ) {
  $stateProvider.state('attraction', {
    url : '/attraction/:attraction',
    views : {
      'main':{
        controller : 'attractionCtrl',
        controllerAs : 'attractionCtrl',
        templateUrl: 'attraction/attraction.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });
}).

controller('attractionCtrl', function(restfulService, $stateParams){
  var attractionID = $stateParams.attraction;
  this.attraction = {};
  restfulService.getAttraction(attractionID).then(function(data) {
    this.attraction = data;
  }.bind(this));
});
