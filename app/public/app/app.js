var app = angular.module('MainApp',[
   'ngRoute',
   'ngMaterial',
   'ngMessages',
   'material.svgAssetsCache',
   'admin.user'
]);
 
app.config(function($routeProvider, $locationProvider)
{
   $routeProvider.otherwise ({ redirectTo: '/' });
})

app.run(function($rootScope, $location, $window) {
   $rootScope.user_logged = false;
});