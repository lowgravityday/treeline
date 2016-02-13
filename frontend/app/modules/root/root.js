'use strict';

angular.module('myApp.root', [])

.config([function() {
	// $routeProvider.when('/home', {
	//   templateUrl: 'home/home.html',
	//   controller: 'View1Ctrl'
	// });
}])

.controller('RootCtrl', ['$scope', '$state', function($scope, $state) {
	//This function is used to set the active class on the navbar items
	$scope.isNavActive = function(currentStateName) {
		return currentStateName === $state.current.name;
	};
}]);