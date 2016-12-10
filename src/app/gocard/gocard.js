angular.module( 'haiwaipiaowu.gocard', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state('gocard', {
    url: '/gocard',
    views: {
      "main": {
        controller: 'GoCardController',
        controllerAs: 'GoCardController',
        templateUrl: 'gocard/gocard.tpl.html'
      }
    },
    data:{ pageTitle: '城市一卡通' }
  })
  .state('gocard.city', {
    url: '/:city',
    views: {
      "main@": {
        controller: 'GoCardCityController',
        controllerAs: 'GoCardCityController',
        templateUrl: 'gocard/city.tpl.html'
      }
    },
    data:{ pageTitle: '城市一卡通' }
  });
})

.controller('GoCardController', function($scope, $state, restfulService) {

  this.cities = [];
  restfulService.getCitiesByProduction('gocard').then(function(data) {
    this.cities = data;
  }.bind(this));

})

.controller('GoCardCityController', function() {
  console.log("xxxxxxxxxxxx");
  
});

