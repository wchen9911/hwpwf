angular.module('haiwaipiaowu.foot', [

])

.directive('foot', function(){
	return {
		restrict: 'E',
		templateUrl: 'foot/foot.tpl.html',
		link: function($scope, element){
			$scope.year = new Date().getFullYear();
		}
	};
});