var app = angular.module("PTDashboard");

app.controller('dashboardCtrl', function($scope, tasksRef, service, $firebase) {
	var vm = this;

	vm.tasks = tasksRef.$asArray();

	vm.submitTask = function() {
		console.log('submitTask');
		vm.tasks.$add({
			title: vm.title,
			dueDate: vm.dueDate,
			task: vm.task
		});
		vm.tasks.$save();
		vm.title = "";
		vm.dueDate = "";
		vm.task = "";
	}

	var messageRef = new Firebase('https://jcd.firebaseio.com/ptech/messages');
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
