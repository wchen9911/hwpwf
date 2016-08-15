angular.module('haiwaipiaowu.checkout', [
    'ui.router',
    'configFactory',
    'ngResource'
]).

config(function( $stateProvider ) {

  $stateProvider.state('checkout', {
    url : '/checkout',
    params : {
      cart : null
    },
    views : {
      "main":{
        controller : 'checkoutCtrl',
        templateUrl: 'checkout/checkout.tpl.html'
      }
    },
    data:{ pageTitle: '购买' }
  });

})

.controller('checkoutCtrl', function($scope, $state, $stateParams, $interval, $restURL, $resource, $window){

  $scope.cart = $stateParams.cart ? $stateParams.cart : [];
  $scope.totalCost = 0;
  $scope.telephone = '';
  $scope.hasPromotion = false;

  $scope.cart.forEach(function(v){
    var price = 0;
    if( v.promotion ){
      $scope.hasPromotion = true;
      if( v.promotion.type == 1 ){
        price = v.promotion.price;
      }else{
        price = v.ticket.price * v.promotion.price;
      }
    }else{
      price = v.ticket.price;
    }
    $scope.totalCost += price * v.quantity;
  });

  $scope.onTaobaoBtn = function(){

    var order = {};

    order.cart = $scope.cart;
    order.totalCost = $scope.totalCost;
    order.telephone = $scope.telephone;

    var orderResource = $resource( $restURL.POST_ORDER, null, {
      'post' : { method: 'post' }
    });

    orderResource.post(order,function(){
      //console.log(arguments);
      $window.open("https://item.taobao.com/item.htm?id=531144804147", "_blank");
    });

  };
  
  $scope.time = 5;

  /*
  var pInterval = $interval(function(){
    if( $scope.time > 0 ){
        $scope.time--;
        console.log(pInterval);
    }else{
      window.location="https://items.alitrip.com/item.htm?toSite=main&id=526023033763&spm=a312a.7700714.0.0.U4URDF#detail";
      $interval.cancel(pInterval);
    }
  },1000);
  */


  
});