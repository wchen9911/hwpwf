angular.module('haiwaipiaowu.ticketlist', [

])

.directive('ticketlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'ticket/ticketlist.tpl.html',
    link: function(scope, element){}
  };
});