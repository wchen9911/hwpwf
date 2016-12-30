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
    data:{ pageTitle: 'NBA' }
  });
})

.controller( 'NBATeamCtrl', function(
    $scope, $state, restfulService, $window, jumpdlg) {

  this.teams = [];
  restfulService.getPerformersByGroup("NBA").then(function(data) {
    this.teams = data;
  }.bind(this));

  this.onclick = function(team) {
    if (team.URL) {
      jumpdlg.open(team);
    } else {
      $state.go('performer', {performerId: team._id});
    }
  };
});
