var app = angular.module("PTDashboard");

app.service('service', function($firebase){
	
	var firebaseUrl = 'https://pt-dashboard.firebaseio.com/'

	var firebaseLogin = new Firebase(firebaseUrl);

	var loginCallback = function(err, authData) {
	    if (err) {
	      switch (err.code) {
	        case "INVALID_EMAIL":
	          // handle an invalid email
	          case "INVALID_PASSWORD":
	          // handle an invalid password
	          default:
	        }
	    } else if (authData) {
	        // user authenticated with Firebase
	        console.log("Logged In! User ID: " + authData.uid);
	        cb(authData); //gives the authenticated user to our callback
	    }
    };

      this.login = function(user, cb){
	    firebaseLogin.authWithPassword({
	      email : user.email,
	      password : user.password
	    }, loginCallback);
	  };


	this.register = function(user, cb){
	    firebaseLogin.createUser({
	      email: user.email,
	      password: user.password
	    }, function(error) {
	        if (error) {
	          switch (error.code) {
	            case "EMAIL_TAKEN":
	              console.log("The new user account cannot be created because the email is already in use.");
	              break;
	            case "INVALID_EMAIL":
	              console.log("The specified email is not a valid email.");
	              break;
	            default:
	              console.log("Error creating user:", error);
	          }
	        } else {
	            console.log("User created successfully");
	            firebaseLogin.authWithPassword({
	              email : user.email,
	              password : user.password
	            }, function(err, authData) {
	                if (err) {
	                  switch (err.code) {
	                    case "INVALID_EMAIL":
	                      // handle an invalid email
	                      case "INVALID_PASSWORD":
	                      // handle an invalid password
	                      default:
	                    }
	                } else if (authData){
	                  //formatEmailForFireBase(authData.uid) //this line(not in the right place. would instead in firebase save as a number save a user as a email)
	                    authData.name = user.name;
	                    authData.timestamp = new Date().toISOString();
	                    firebaseLogin.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
	                    cb(authData);
	                }
	              });
	        }
	    });
  };
})