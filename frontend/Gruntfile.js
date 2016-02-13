'use strict';

module.exports = function ( grunt ) {
	// load all grunt tasks
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.initConfig( {
		watch: {
			// if any files change in these directories run our tasks
			files: [ "app/components/**/*.less",
				"app/modules/**/*.less",
				"app/components/**/*.js",
				"app/modules/**/*.js",
				"app/components/**/*.html",
				"app/modules/**/*.html",
				"app/*.js",
				"app/*.html"
			],
			options: {
				livereload: true
			},
			tasks: [ "less" ]
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2,
					relativeUrls: true,
					paths: [ "app/components", "app" ],
				},
				files: {
					"app/app.css": [
							"app/components/**/*.less",
							"app/modules/**/*.less"
							//"app/**/*.less" put other less dirs here
						] // destination file and source files
				}
			}
		},
	} );
	// the default task (running "grunt" in console) is "watch"
	grunt.registerTask( 'default', [ 'watch' ] );
};