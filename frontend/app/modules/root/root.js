'use strict';

angular.module('myApp.root', [])

.config([function() {
	// $routeProvider.when('/home', {
	//   templateUrl: 'home/home.html',
	//   controller: 'View1Ctrl'
	// });
}])

.controller('RootCtrl', [function() {
	console.log('HeliCtrl Loaded');
}]);