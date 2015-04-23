var app = angular.module("PTDashboard");

app.controller('lognCtrl', function($scope, service, $location) {
  




  // $scope.status = 'Register';
  // $scope.showReg = function(){
  //   if($scope.status === 'Register'){
  //     $scope.status = 'Login';
  //   } else {
  //     $scope.status = 'Register';
  //   }
  //   $scope.reg = !$scope.reg;
  // };

  	$scope.state = 'login';

	$scope.clickLogin = function() {
		service.login($scope.email, $scope.password).then(function() {
			$location.path('/shop');
			updateUser();
		}).catch(function(err) {
			$scope.loginError = true;
		});
	};

	  var loginCallback = function(user){
	    user.uid = user.uid.replace('simplelogin:', '');
	    $scope.$apply(function(){
	      $location.path('/dashboard/' + user.uid)
	    });
	  };

	$scope.login = function () {
    	return authService.login($scope.details, loginCallback);
  	};

	$scope.register = function() {
		return service.register($scope.details, loginCallback);
			$scope.state = 'login';
			$scope.registerSuccessful = true;
			$scope.register = "";
			$scope.login = "";
		// }).catch(function(err) {
		// 	$scope.registerError = true;
		// });
	};

	$scope.changeState = function(newState) {
		$scope.loginError = false;
		$scope.registerError = false;
		$scope.state = newState;
	};

})
