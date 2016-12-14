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
  })
  .state('gocard.city.card', {
    url: '/:card',
    views: {
      "card": {
        controller: 'CardController',
        controllerAs: 'CardController',
        templateUrl: 'gocard/card.tpl.html'
      }
    },
    data:{ pageTitle: '城市一卡通' }
  })
  ;
})

.controller('GoCardController', function($scope, $state, restfulService) {

  this.cities = [];
  restfulService.getCitiesByProduction('gocard').then(function(data) {
    this.cities = data;
  }.bind(this));

  this.clickOnCity = function(city) {
    $state.go('gocard.city', {city: city._id});
  };

})

.controller('GoCardCityController', function($scope, $state, restfulService, $stateParams) {
  
  var city = $stateParams.city;
  this.gocards = [];
  restfulService.getGoCardsByCity(city).then(function(data) {
    this.gocards = data;
  }.bind(this));

  this.clickOnGoCard = function(gocard) {
    $state.go('gocard.city.card', {card: gocard._id});
  };
  
})

.controller('CardController', function($scope, $state, restfulService, $stateParams){
  
  var card = $stateParams.card;

  this.tickets = [];
  this.attractions = [];
  this.attractionsSale = [];

  restfulService.getAttractionsByCard(card).then(function(data) {
    this.attractions = data.attractions;
    this.attractionsSale = data.attractionsSale;
  }.bind(this));

  restfulService.getPerformanceTickets(card).then(function(data) {
    this.tickets = data;
  }.bind(this));

  console.log("yyyyyyy");
})
;

