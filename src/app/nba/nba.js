angular.module( 'haiwaipiaowu.nba', [
  'ui.router',
  'configFactory'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'nba', {
    url: '/nba',
    views: {
      "main": {
        controller: 'NBATeamCtrl',
        templateUrl: 'nba/nba.team.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  }).state( 'games', {
    url: '/nba/games/:teamid',
    views: {
      "main": {
        controller: 'NBAGameCtrl',
        templateUrl: 'nba/nba.game.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  }).state( 'tickets', {
    url: '/nba/tickets/:matchid',
    views: {
      "main": {
        controller: 'NBATicketCtrl',
        templateUrl: 'nba/nba.ticket.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'NBATeamCtrl', function($scope, $http, $state, $restURL) {

  var url = $restURL.LIST_TEAMS;
  var size = 6;
  $scope.teams = [];

  $http.get( url )
  .then(function(response){
    console.log(response);
    $scope.teams = _.chunk(response.data, 6);
  });

  $scope.go = function(item){
    $state.go('games', {teamid:'1'});
  };

}).controller( 'NBAGameCtrl', function($scope, $state, $stateParams){
  console.log( $stateParams );

  $scope.go = function(item){
    $state.go('tickets', {matchid:'1'});
  };

}).controller( 'NBATicketCtrl', function( $scope, $state,$stateParams ){

  $scope.buyTicket = function(){
    $state.go("checkout");
  };

}).directive('stadiummap', function( $http ){

  return {
    restrict: 'E',
    scope: {
      metadata: '@',
      image: '@'
    },
    template: '<div></div>',
    link: function(scope, element){

      var metadataUrl = scope.metadata;
      var imageUrl = scope.image;

      $http.get( metadataUrl )
      .then(function(response){
        console.log(response);
        var metadata = response.data;
        //console.log(metadata);
        var paper = new Raphael("mapcontainer");
        paper.setViewBox(0, 0, 4096, 4096, false);
        paper.image(imageUrl,0,0,4096,4096);

        _.forIn( metadata , function(value, key) {
          //console.log(key);
          var path = paper.path(value.p);
          path.attr("fill", value.c );
          path.attr("fill-opacity", 0.3 );
          //path.transform('...S' + w + ',' + h + ',0,0');
        });

      });
    }
  };

});

