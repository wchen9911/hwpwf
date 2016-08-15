angular.module( 'haiwaipiaowu.alcatraz', [
  'ui.router',
  'ui.bootstrap',
  'configFactory',
  'ngResource'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'alcatraz', {
    url: '/alcatraz',
    views: {
      "main": {
        controller: 'AlcatrazCtrl',
        templateUrl: 'alcatraz/alcatraz.tpl.html'
      }
    },
    data:{ pageTitle: '恶魔岛' }
  });
})

.controller( 'AlcatrazCtrl', function($scope, $http, $state, $restURL, $resource, $q, $filter) {
  
  var ticktesInfo = [];
  var map = {};

  $scope.selectOptions = [0,1,2,3,4,5,6,7,8];
  $scope.dt = new Date();
  $scope.time = "";


  var tickets = $resource( $restURL.GET_ALCATRAZ_TICKETS, null, {
    'get' : { method: 'GET', isArray:true }
  });

  var dateDisableDeferred =  $q.defer();
  $scope.dateDisablePromise = dateDisableDeferred.promise;

  var getTickets = function(date){

    console.log(date);
    var t = tickets.get({
      year : date.getFullYear(),
      month : date.getMonth() + 1,
      day : date.getDate()
    });
    return t.$promise;
 };

  var loadingDataFlag = false;
  var newLoop = true;
  var firstDateLoaded = null;
  var cnt = 0;
  var loaded = false;


  $scope.options = {
    datepickerMode : 'day',
    showWeeks : false,
    startingDay : 1,
    dateDisabled : function(d){
      var date = d.date;
      var mode = d.mode;

     if( mode === 'day' ){
        // we need to check if the first date of the calendar changed,
        if( newLoop ){
          newLoop = false;
          var firstDateKey = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
          if( firstDateLoaded != firstDateKey ){
            firstDateLoaded = firstDateKey;
            ticktesInfo  = [];
            loaded = false;
          }
        }
        cnt++;  
        if(cnt === 43 ){
          newLoop = true;
          cnt = 0;
        }
        //need to load new data
        if( !loaded && !loadingDataFlag ){

          loadingDataFlag = true;

          var p = getTickets(date);
          map = {};
          p.then(function(result){
            ticktesInfo = result;
            ticktesInfo.forEach(function(v){
              v.date = new Date(v.date);
              var key = $filter('date')(v.date,'yyyy-MM-dd', 'UTC');
              if( !map[key] ){
                map[key] = [];
              }
              map[key].push(v);
            });
            loadingDataFlag = false;
            loaded = true;
            dateDisableDeferred.notify("update");
            updateTicketsList();
          },function(error){
            loadingDataFlag = false;
          });

        }else{
          var key = $filter('date')(date,'yyyy-MM-dd');
          var now = new Date();
          var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          //disable past
          if( date < today) {
            return true;
          }
      
          if(map[key]){
            return false;
          }else{
            return true;
          }
        }
      }
      return false;
    }
    
  };


  $scope.showTickets = [];
  var groupTickets = function(showTickets){
    var ticketsConfig = {
      package : ["09:30", "09:40"],
      alcatraz : ["08:45", "09:10","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:10","14:40","15:20","15:50"],
      night : ["17:55","18:30"]
    };

    var tickets = {};
    tickets.package = _.map(ticketsConfig.package, function(value){
      return {
        ticket : null,
        disabled : true,
        time : value
      };
    });
    tickets.alcatraz = _.map(ticketsConfig.alcatraz, function(value){
      return {
        ticket : null,
        disabled : true,
        time : value
      };
    });
    tickets.night = _.map(ticketsConfig.night, function(value){
      return {
        ticket : null,
        disabled : true,
        time : value
      };
    });
    if( showTickets ) {
      showTickets.forEach(function(v){
        var timeKey = $filter('date')(v.date,'HH:mm', 'UTC');
        var obj = null;
        if( v.id == "3206" ){
          obj = _.find( tickets.package, ['time', timeKey]);
        }else if(v.id == "3187"){
          obj = _.find( tickets.night, ['time', timeKey]);
        }else{
          obj = _.find( tickets.alcatraz, ['time', timeKey]);
        }
        if(obj){
          obj.disabled = false;
          obj.ticket = v;
        }
      });
    }
    return tickets;
  };


  var updateTicketsList = function(){
    var key = $filter('date')($scope.dt,'yyyy-MM-dd');
    $scope.showTickets = groupTickets(map[key]);
  };

  $scope.$watch('dt', function(){
    updateTicketsList();
  });

  $scope.onClickTime = function(ticket){

    $scope.time = $filter('date')(ticket.date,'HH:mm', 'UTC');

    var promotionGroup = ticket.promotionGroup;

    var promotionsResource = $resource( $restURL.LIST_PROMOTIONS_BY_GROUP, null, {
      'get' : { method: 'GET', isArray:true }
    });

    promotionsResource.get({ group: promotionGroup}, function( promotions ){
      $scope.promotions = [];
      promotions.forEach(function(v){
        $scope.promotions.push({
          promotion : v,
          ticket : ticket,
          quantity : 0
        });
      });
    });
  };

  $scope.onBuyBtn = function(){

    var cart = [];

    $scope.promotions.forEach(function(v){
      if( v.quantity !== 0 ){
        cart.push(v);
      }
    });    

    $state.go("checkout", { cart : cart } );
  };

}).directive('jmDpRefreshView',function() {
  var noop = function(){};
  var refreshDpOnNotify = function (dpCtrl) {
    return function() {
      dpCtrl.refreshView();
    };
  };
  return {
    require: 'uibDatepicker',
    link: function(scope,elem,attrs,dpCtrl) {
      var refreshPromise = scope[attrs.jmDpRefreshView];
      refreshPromise.then(noop,noop,refreshDpOnNotify(dpCtrl));
    }
  };
});

