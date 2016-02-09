'use strict';

angular.module( 'myApp.home', [] )

.config( [ function () {
	// $routeProvider.when('/home', {
	//   templateUrl: 'home/home.html',
	//   controller: 'View1Ctrl'
	// });
} ] )

.controller( 'HomeCtrl', [ function () {
	console.log( 'HomeCtrl Loaded' );
} ] );