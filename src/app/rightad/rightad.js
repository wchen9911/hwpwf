angular.module('haiwaipiaowu.rightad', [

])

.directive('rightad', function(){
  return {
    restrict: 'E',
    scope: {
      metadata: '@',
      image: '@'
    },
    template: '<div>map</div>',
    link: function(scope, element){}
  };
});