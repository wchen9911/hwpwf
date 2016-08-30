angular.module( 'haiwaipiaowu.nba', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'nba', {
    url: '/nba',
    views: {
      "main": {
        controller: 'NBATeamCtrl',
        controllerAs: 'NBATeamCtrl',
        templateUrl: 'nba/nba.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'NBATeamCtrl', function($scope, $state, restfulService) {

  this.teams = [];
  restfulService.getPerformersByGroup("NBA").then(function(data) {
    this.teams = data;
  }.bind(this));

  this.onclick = function(team) {
    $state.go('performer', {performerId: team._id});
  };
});

