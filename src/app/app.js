angular.module( 'ngBoilerplate', [
  'ngMaterial',
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'haiwaipiaowu.alcatraz',
  'haiwaipiaowu.checkout',
  'haiwaipiaowu.nba',
  'haiwaipiaowu.performer',
  'haiwaipiaowu.service',
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

