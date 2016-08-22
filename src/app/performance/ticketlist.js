angular.module('haiwaipiaowu.ticketlist', [

])

.directive('ticketlist', function(){
  return {
    restrict: 'E',
    templateUrl: 'performance/ticketlist.tpl.html',
    link: function(scope, element){}
  };
});