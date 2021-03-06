'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ui.router',
	'ui.bootstrap',
	'myApp.root',
	'myApp.home',
	'myApp.other',
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('root', {
			url: '',
			templateUrl: 'modules/root/root.html',
			controller: 'RootCtrl',
		});
	$stateProvider
		.state('root.home', {
			url: '/home',
			templateUrl: 'modules/home/home.html',
			controller: 'HomeCtrl',
			title: 'Home'
		});
	$stateProvider
		.state('root.other', {
			url: '/other',
			templateUrl: 'modules/other/other.html',
			controller: 'OtherCtrl',
			title: 'Other'
		});
}]);