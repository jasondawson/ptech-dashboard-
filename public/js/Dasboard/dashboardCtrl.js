var app = angular.module("PTDashboard");

app.controller('dashboardCtrl', function($scope, tasksRef, service, $firebase) {

	$scope.tasks = tasksRef.$asArray();

	$scope.submitTask = function(title, dueDate, task) {
		$scope.tasks.$add({
			title: $scope.title,
			dueDate: $scope.dueDate,
			task: $scope.task
		});
		$scope.title = "";
		$scope.dueDate = "";
		$scope.task = "";
	}

	var messageRef
	$scope.messages = $firebase(messageRef);
  // $scope.things = thingsReference;
  // $scope.addThing = function(){
  //   $scope.things.$add($scope.thing);
  // }
  // $scope.removeThing = function(thing){
  //   $scope.things.$remove(thing);
  // }
  // $scope.update = function(){
  //   $scope.profile.$save();
  // };	

})
