angular.module('haiwaipiaowu.ticketlist', [

])

.controller('ticketlistController', function($scope, restfulService){

  console.log(this.performanceId);

  var performanceId = '57ba090407f2889466f7a08a';

  restfulService.getPerformanceTickets(performanceId).then(function(data) {
    this.tickets = data;
    $scope.tickets = data;
    console.log(data);
  });

})

.directive('ticketlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'performance/ticketlist.tpl.html',
    controller: 'ticketlistController',
    controllerAs: 'tktCtrl',
    bindToController: {
      performanceId: '='
    }
  };
});