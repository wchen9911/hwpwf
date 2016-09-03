angular.module('haiwaipiaowu.cart', [

]).

service('cart', function(){
  var CART = "cart";

  this.getCart = function() {
    var cart = localStorage.getItem(CART);
    return !cart ? {} : JSON.parse(cart);
  };

  this.addToCart = function(ticketId, quantity, ticket) {
    var cart = this.getCart();
    cart[ticketId] = {quantity: quantity, ticket: ticket};
    this.saveCart(cart);
  };

  this.saveCart = function(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
  };

  this.deleteFromCart = function(ticketId) {
    var cart = this.getCart();
    if (cart[ticketId]) {
      delete cart[ticketId];
    }
    this.saveCart(cart);
  };
});