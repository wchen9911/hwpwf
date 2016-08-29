angular.module('haiwaipiaowu.checkout', [
    'ui.router'
]).

config(function( $stateProvider ) {
  $stateProvider.state('checkout', {
    url : '/checkout',
    views : {
      "main":{
        controller : 'checkoutCtrl',
        controllerAs: 'checkoutCtrl',
        templateUrl: 'checkout/checkout.tpl.html'
      }
    },
    data:{ pageTitle: '购买' }
  });

})

.controller('checkoutCtrl', function($scope, $state, $stateParams){

  
});