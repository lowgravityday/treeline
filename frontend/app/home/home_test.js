'use strict';

describe( 'myApp.heli module', function () {

	beforeEach( module( 'myApp.heli' ) );

	describe( 'heli controller', function () {

		it( 'should ....', inject( function ( $controller ) {
			//spec body
			var heliCtrl = $controller( 'HeliCtrl' );
			expect( heliCtrl ).toBeDefined();
		} ) );

	} );
} );