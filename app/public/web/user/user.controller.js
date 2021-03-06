angular.module('admin.user.controller', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
  .when('/', { 
    controller: 'UserSignInCtrl', 
    templateUrl: 'web/user/login.html'      
  })
	.when('/admin/users', {
		controller: 'UserCtrl',
		templateUrl: 'web/user/user.html?nd=' + Date.now(),
		resolve: {
		
		}
	})
  .when('/admin/user', {
    controller: 'UserAddCtrl',
    templateUrl: 'web/user/user-form.html?nd=' + Date.now(),
    resolve: {
      
    }
  })
}])

.controller('UserSignInCtrl', ['$scope','$rootScope','$location', '$mdDialog', 'User', function($scope,$rootScope,$location,$mdDialog,User) {
  console.log("teste");
    $scope.signin = function(){
        User.signin({email:$scope.user.email, password:$scope.user.password}).$promise.then(function(data) {
            if( typeof data !== 'undefined' && typeof data.id !== 'undefined'){
                $rootScope.user_logged = false;
                $location.path("/admin/users");
            } else {
                $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Erro')
                    .textContent('Usuário ou senha inválidos!')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Fechar')
                );
            }
         });
    };
}])

.controller('UserCtrl', ['$scope', 'User', function($scope, User) {
  $scope.users = [];
  User.query(function(data) {
    if (data != null && typeof data !== 'undefined' ){
      for (var i = 0; i < data.length; i++) {
         $scope.users.push(data[i]);
      };
    }
  });
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