angular.module('haiwaipiaowu.map', [

])

.directive('map', function(){
  return {
    restrict: 'E',
    scope: {
      metadata: '@',
      image: '@'
    },
    template: '<div>map</div>',
    link: function(scope, element){
      /*
      var metadataUrl = scope.metadata;
      var imageUrl = scope.image;
      $http.get( metadataUrl )
      .then(function(response){
        console.log(response);
        var metadata = response.data;
        //console.log(metadata);
        var paper = new Raphael("mapcontainer");
        paper.setViewBox(0, 0, 4096, 4096, false);
        paper.image(imageUrl,0,0,4096,4096);

        _.forIn( metadata , function(value, key) {
          //console.log(key);
          var path = paper.path(value.p);
          path.attr("fill", value.c );
          path.attr("fill-opacity", 0.3 );
          //path.transform('...S' + w + ',' + h + ',0,0');
        });
        */
    }
  };
});