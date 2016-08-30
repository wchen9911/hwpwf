angular.module('haiwaipiaowu.service', [

]).

service('restfulService', function($resource) {

  var APIURL = "http://localhost:3000";

  var Performance = $resource(APIURL+'/performances/:subpath/:performerId', {}, {
    getPerformerPerformances: {
      method: 'GET',
      isArray: true,
      url: APIURL+'/performances/performer/:performerId'
    },
    getPerformanceDetail: {
      method: 'GET',
      url: APIURL + '/performances/:performanceId'
    },
    test: {
      method: 'GET'
    }
  });

  var Location = $resource(APIURL+'/locations/:locationId', {}, {
    getLocationDetail: {
      method: 'GET'
    }
  });

  var Ticket = $resource(APIURL+'/tickets/', {}, {
    getPerformanceTickets: {
      method: 'GET',
      url: APIURL+'/tickets/performance/:performanceId',
      isArray: true
    },
    getTicket: {
      method: 'GET',
      url: APIURL+'/tickets/:ticketId'
    }
  });

  var Feedback = $resource(APIURL+'/feedbacks/', {}, {
    addFeedback: {
      method: 'POST',
      url: APIURL+'/feedbacks/'
    }
  });

  var Performer = $resource(APIURL+'/performers/', {}, {
    getPerformersByGroup: {
      method: 'GET',
      url: APIURL+'/performers/group/:group',
      isArray: true
    }
  });

  this.getPerformerPerformances = function(performerId) {
    return Performance.getPerformerPerformances({'performerId': performerId}).$promise;
  };

  this.getPerformanceDetail = function(performanceId) {
    return Performance.getPerformanceDetail({'performanceId': performanceId}).$promise;
  };

  this.getLocationDetail = function(locationId) {
    return Location.getLocationDetail({'locationId': locationId}).$promise;
  };

  this.getPerformanceTickets = function(performanceId) {
    return Ticket.getPerformanceTickets({'performanceId': performanceId}).$promise;
  };

  this.getTicket = function(ticketId) {
    return Ticket.getTicket({'ticketId': ticketId}).$promise;
  };

  this.addFeedback = function(feedback) {
    return Feedback.addFeedback(feedback).$promise;
  };

  this.getPerformersByGroup = function(group) {
    return Performer.getPerformersByGroup({group: group}).$promise;
  };

});
