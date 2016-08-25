angular.module('admin.user.controller', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
  .when('/', { 
    controller: 'UserSignInCtrl', 
    templateUrl: 'app/user/login.html'      
  })
	.when('/admin/users', {
		controller: 'UserCtrl',
		templateUrl: 'app/user/user.html?nd=' + Date.now(),
		resolve: {
		
		}
	})
}])


.controller('UserCtrl', ['$scope', 'User', function($scope, User) {

console.log(User);
    User.query(function(data) {
        console.log(data);
    });

	var imagePath = 'https://material.angularjs.org/latest/img/list/60.jpeg?0';
    $scope.messages = [{
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];
}])

.controller('UserSignInCtrl', ['$scope','$rootScope','$location', function($scope, $rootScope,$location) {   
    console.log("UserSignInCtrl");    
   $scope.signin = function() {      
        console.log($scope.username);
        console.log($scope.password);
                               
//    $rootScope.user_logged = true;
//    console.log($rootScope.user_logged);
//    $location.path('/admin/users');
  };
}])

.controller('UserAddCtrl', ['$scope', function($scope) {

}])

.controller('UserEditCtrl', ['$scope', function($scope) {

}])

.controller('UserChangePasswordCtrl', ['$scope', function($scope) {

}])

.controller('UserForgotPasswordCtrl', ['$scope', function($scope) {
	
}])

.controller('UserNewPasswordCtrl', ['$scope', function($scope) {
	
}])