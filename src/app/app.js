angular.module( 'ngBoilerplate', [
  'ngMaterial',
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'haiwaipiaowu.alcatraz',
  'haiwaipiaowu.attraction',
  'haiwaipiaowu.cart',
  'haiwaipiaowu.cartlist',
  'haiwaipiaowu.checkout',
  'haiwaipiaowu.foot',
  'haiwaipiaowu.jumpdlg',
  'haiwaipiaowu.map',
  'haiwaipiaowu.nba',
  'haiwaipiaowu.other',
  'haiwaipiaowu.performance',
  'haiwaipiaowu.performer',
  'haiwaipiaowu.rightad',
  'haiwaipiaowu.service',
  'haiwaipiaowu.ticket',
  'haiwaipiaowu.ticketlist',
  'haiwaipiaowu.gocard',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/gocard' );
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

.filter('arrayToString', function(){
  return function(input) {
    if(Array.isArray(input)){
      return input.join(",");
    }else{
      return input;
    }
  };
})
;
