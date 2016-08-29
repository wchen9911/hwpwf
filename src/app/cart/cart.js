angular.module('haiwaipiaowu.cartlist', [

])

.controller('cartlistController', function($scope, restfulService, $state, cart){

  this.itemList = cart.getCart();

  console.log(this.itemList);


})

.directive('cartlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'cart/cart.tpl.html',
    controller: 'cartlistController',
    controllerAs: 'clCtrl'
  };
});