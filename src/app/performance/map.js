angular.module('haiwaipiaowu.map', [

])

.controller('mapController', function($scope, $element, restfulService, $http){
  $scope.$watch('locationid', function(locationid){
    if(locationid){
      restfulService.getLocationDetail(locationid).then(function(data) {
        console.log(data);
        var jsonUrl = data.map_json;
        var imageUrl =  data.map_img;

        // download map data and draw the map
        $http.get(jsonUrl).then(function(response) {
          var metadata = response.data;
          var paper = new Raphael($element[0],'100%','100%');
          paper.setViewBox(0, 0, 4096, 4096, false);
          paper.image(imageUrl,0,0,4096,4096);

          _.forIn( metadata , function(value, key) {
            var path = paper.path(value.p);
            path.attr("fill", value.c );
            path.attr("fill-opacity", 0.3 );
          });
        });
      });
    }
  });
  console.log( $element);
})

.directive('map', function(){
  return {
    restrict: 'E',
    controller: 'mapController',
    controllerAs: 'mapController',
    scope: {
      locationid: '=locationid'
    },
    template: '<div></div>'
  };
});