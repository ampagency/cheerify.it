'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var config = {
        name: 'cheerify.it'
    };

    grunt.initConfig({
        config: config,
        responsive_images: {
            dev: {
                options: {
                    sizes: [
                        {
                            width: 320,
                        },
                        {
                            width: 640
                        },
                        {
                            width: 1024
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '/images'
                }]
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= config.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'scripts/main.js',
                dest: 'scripts/main.min.js'
            }
        },

        cssmin: {
			options: {
				banner: '/* <%= config.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			minify: {
                expand: true,
                cwd: 'styles/',
                src: 'style.pre.css',
                dest: 'styles/',
                ext: '.min.css'
            }
		},

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'scripts/main.js',
            ]
        },
         autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 7']
            },

            // just prefix the specified file
            prefix: {
                options: {
                // Target-specific options go here.
                },
                src: 'styles/style.css',
                dest: 'styles/style.pre.css'
            }
        }
    });


    grunt.registerTask('default', [
        'uglify',
        'autoprefixer',
        'cssmin',
        'responsive_images'
    ]);

    grunt.registerTask('test', [
        'jshint'
    ]);
};
