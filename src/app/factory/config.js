angular.module('configFactory',[
])

.factory('$restURL', function(){
	
	var hostPort = "";

	return {
		LIST_TEAMS : hostPort + "/nba/teams",
		LIST_GAMES : '',
    GET_ALCATRAZ_TICKETS : hostPort + '/alcatraz/tickets/year/:year/month/:month/day/:day',
    LIST_PROMOTIONS_BY_GROUP : hostPort + '/promotions/group/:group',
    POST_ORDER : hostPort + "/orders"
	};

});