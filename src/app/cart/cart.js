angular.module('haiwaipiaowu.cartlist', [

])

.controller('cartlistController', function($scope, restfulService, $state){

})

.directive('cartlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'cart/cart.tpl.html',
    controller: 'cartlistController',
    controllerAs: 'clCtrl'
  };
});