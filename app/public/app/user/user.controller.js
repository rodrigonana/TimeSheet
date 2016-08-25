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
  .when('/admin/user', {
    controller: 'UserAddCtrl',
    templateUrl: 'app/user/user-form.html?nd=' + Date.now(),
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
  $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
}])

.controller('UserEditCtrl', ['$scope', function($scope) {

}])

.controller('UserChangePasswordCtrl', ['$scope', function($scope) {

}])

.controller('UserForgotPasswordCtrl', ['$scope', function($scope) {
	
}])

.controller('UserNewPasswordCtrl', ['$scope', function($scope) {
	
}])