angular.module('admin.user.controller', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/admin/user', {
		controller: 'UserCtrl',
		templateUrl: '/user/user.html?nd=' + Date.now(),
		resolve: {
		
		}
	})
}])

.controller('UserCtrl', ['$scope', function($scope) {
	console.log("ok");
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

.controller('UserAddCtrl', ['$scope', function($scope) {

}])

.controller('UserEditCtrl', ['$scope', function($scope) {

}])

.controller('UserSignInCtrl', ['$scope', function($scope) {

}])

.controller('UserChangePasswordCtrl', ['$scope', function($scope) {

}])

.controller('UserForgotPasswordCtrl', ['$scope', function($scope) {
	
}])

.controller('UserNewPasswordCtrl', ['$scope', function($scope) {
	
}])