'use strict';

var app = angular.module('MainApp',[
   'ngRoute',
   'ngMaterial',
   'ngMessages',
   'ngResource',
   'material.svgAssetsCache',
   'admin.user'
]);
 
app.config(function($routeProvider, $locationProvider)
{
	//$locationProvider.html5Mode(true);
/*	$locationProvider.html5Mode(true);*/
	$routeProvider.otherwise ({ redirectTo: '/' });
})

app.run(function($rootScope, $location, $window) {
   $rootScope.user_logged = false;
});

app.controller('MainCtrl', function($scope) {
 console.log("ok");
});