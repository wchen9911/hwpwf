angular.module('haiwaipiaowu.other', [
    'ui.router'
]).

controller('otherCtrl', function(restfulService){

  this.feedback = {
    contact: '',
    content: ''
  };

  this.message = "";

  this.addFeedback = function() {
    if (!this.feedback.content) {
      return;
    }
    restfulService.addFeedback(this.feedback).then(function() {
      this.message = "感谢您，您的反馈已提交成功！";
    }.bind(this));
  };

}).

config(function( $stateProvider ) {
  $stateProvider.state('other', {
    url : '/other/',
    views : {
      "main":{
        controller : 'otherCtrl',
        controllerAs : 'otherCtrl',
        templateUrl: 'other/other.tpl.html'
      }
    },
    data:{ pageTitle: '其他-代买' }
  });
});
