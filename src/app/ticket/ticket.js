angular.module('haiwaipiaowu.ticket', [
    'ui.router'
]).

config(function( $stateProvider ) {

  $stateProvider.state('ticket', {
    url : '/ticket/:performanceId',
    views : {
      "main":{
        controller : 'ticketCtrl',
        templateUrl: 'ticket/ticket.tpl.html'
      }
    },
    data:{ pageTitle: '' }
  });

})

.controller('ticketCtrl', function($scope, $stateParams, restfulService){
  
});