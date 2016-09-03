var ticketCtrl = function($scope, $stateParams, restfulService, cart, $state) {
  var ticketId  = $stateParams.ticketId;
  this.quantity = 1;
  this.ticket = {};
  this.cart_ = cart;
  this.state_ = $state;

  // Loads ticket info
  restfulService.getTicket(ticketId).then(function(ticket) {
    this.ticket = ticket;
    this.quantity = this.ticket && this.ticket.pack && this.ticket.pack[0] && 1;
  }.bind(this));

};

// Adds ticket to cart
ticketCtrl.prototype.addTicketToCart = function(ticket) {
    this.cart_.addToCart(ticket._id, this.quantity, ticket);
};

// Adds ticket to the cart and checkout 
ticketCtrl.prototype.addTicketToCardAndCheckout = function(ticket) {
  this.addTicketToCart(ticket);
  this.state_.go('checkout');
};

angular.module('haiwaipiaowu.ticket', [
    'ui.router'
]).

controller('ticketCtrl', ticketCtrl).

config(function( $stateProvider ) {
  $stateProvider.state('ticket', {
    url : '/ticket/:ticketId',
    views : {
      "main":{
        controller : 'ticketCtrl',
        controllerAs : 'ticketCtrl',
        templateUrl: 'ticket/ticket.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });
});
