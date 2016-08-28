angular.module('haiwaipiaowu.ticketlist', [

])

.controller('ticketlistController', function($scope, restfulService, $state){

  console.log(this.performanceId);

  var performanceId = '57ba090407f2889466f7a08a';

  restfulService.getPerformanceTickets(performanceId).then(function(data) {
    this.tickets = data;
    $scope.tickets = data;
    console.log(data);
  });

  this.gotoTicket = function (ticketId) {
    $state.go('ticket', {ticketId: ticketId});
  };

  $scope.gotoTicket = function (ticketId) {
    $state.go('ticket', {ticketId: ticketId});
  };


})

.directive('ticketlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'performance/ticketlist.tpl.html',
    controller: 'ticketlistController',
    controllerAs: 'tktlsCtrl',
    bindToController: {
      performanceId: '='
    }
  };
});