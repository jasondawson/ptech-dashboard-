var app = angular.module("PTDashboard", ["ngRoute", "firebase"]);

app.config(function($routeProvider) {
	$routeProvider
	.when ('/',{
		templateUrl: "js/Login/login.html",
		controller: "lognCtrl"
	})
	.when ('/dashboard', {
		templateUrl: "js/Dasboard/dashboard.html",
		controller: "dashboardCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})