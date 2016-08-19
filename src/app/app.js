angular.module( 'ngBoilerplate', [
  'ngMaterial',
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'haiwaipiaowu.alcatraz',
  'haiwaipiaowu.checkout',
  'haiwaipiaowu.foot',
  'haiwaipiaowu.map',
  'haiwaipiaowu.nba',
  'haiwaipiaowu.performer',
  'haiwaipiaowu.rightad',
  'haiwaipiaowu.service',
  'haiwaipiaowu.ticket',
  'haiwaipiaowu.ticketlist',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/alcatraz' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + '' ;
    }
  });
})


;

