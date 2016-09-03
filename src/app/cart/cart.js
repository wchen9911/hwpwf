angular.module('haiwaipiaowu.cartlist', [

])

.controller('cartlistController', function($scope, restfulService, $state, cart){

  this.total = 0;

  this.deleteItem = function(itemId) {
    cart.deleteFromCart(itemId);
    this.update();
  };

  this.update = function() {
    this.total = 0;
    this.itemList = cart.getCart();
    if (this.itemList) {
      Object.keys(this.itemList).forEach(function(key) {
        var item = this.itemList[key];
        this.total += item.quantity * item.ticket.price;
      }.bind(this));
    }
  };

  $scope.$on('cart-change', function() {
    this.update();
  }.bind(this));

  this.update();
})

.directive('cartlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'cart/cart.tpl.html',
    controller: 'cartlistController',
    controllerAs: 'clCtrl'
  };
});