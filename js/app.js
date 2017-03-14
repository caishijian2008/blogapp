var blogApp = angular.module('blogApp', ['ngRoute','ngAnimate','loginCtrl']);

blogApp.config(function($routeProvider) {
	$routeProvider.when('/login',{
		templateUrl: 'tpls/loginform.html',
		controller: 'loginCtrl'
	}).otherwise({
		redirectTo: '/login'
	});
});