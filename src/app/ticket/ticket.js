angular.module('haiwaipiaowu.ticket', [
    'ui.router'
]).

controller('ticketCtrl', function($scope, $stateParams, restfulService){

  this.ticket = {};

  var ticketId  = $stateParams.ticketId;
  restfulService.getTicket(ticketId).then(function(ticket) {
    this.ticket = ticket;
    console.log(ticket);
  }.bind(this));
  
}).

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

})
;
