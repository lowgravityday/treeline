'use strict';

angular.module( 'myApp.other', [] )

.config( [ function () {
	// $routeProvider.when('/view2', {
	//   templateUrl: 'view2/view2.html',
	//   controller: 'View2Ctrl'
	// });
} ] )

.controller( 'OtherCtrl', [ function () {
	console.log( 'OtherCtrl loaded' );
} ] );