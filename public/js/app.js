var app = angular.module("PTDashboard", ["ngRoute", "firebase"]);

app.config(function($routeProvider) {
	$routeProvider
	.when ('/',{
		templateUrl: "js/Login/login.html",
		controller: "lognCtrl"
	})
	.when ('/dashboard/:uid', {
		templateUrl: "js/Dasboard/dashboard.html",
		controller: "dashboardCtrl",
		controllerAs: 'vm',
		resolve: {
			tasksRef: function(service, $route){
 				return service.addTask();
 			}
	    	//userReference: function(firebaseService, $route){
	     //    	return firebaseService.getUser($route.current.params.userId);
	     //  	},
	      	// thingsReference: function(firebaseService, $route){
	       //  	return service.getTasks($route.current.params.userId);
	      	// }

	    }
	})
	.otherwise({
		redirectTo: "/"
	})
})