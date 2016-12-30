angular.module('haiwaipiaowu.jumpdlg', [

]).

service('jumpdlg', function($uibModal){

  this.open = function(option) {
    $uibModal.open({
        templateUrl: 'service/jumpdlg.tpl.html',
        controller: 'jumpdlgModalInstanceCtrl',
        controllerAs: '$ctrl',
        resolve: {
          option: function () {
            return option;
          }
        }
    });
  };
})

.controller('jumpdlgModalInstanceCtrl', function(
    $uibModalInstance, option, $interval, $window) {

  this.seconds = 10;
  this.option = option;

  var handler = $interval(function() {
    this.seconds -= 1;
    if( this.seconds === 0 ) {
      $interval.cancel(handler);
      $window.open(option.URL, '_blank');
    }
  }.bind(this), 1000);

  this.ok = function () {
    $interval.cancel(handler);
    $uibModalInstance.close();
  };

});
