module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            static: {
                options: {
                    progrressive: true
                },
                files: [{
                    expand:true,
                    cwd: 'assets/_img-temp/',
                    src: ['**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: 'assets/img'
                }]
            }
        },
        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: []
            },
            files: ['_site/*.html']
        },
        sass: {
            dist: {
                files: {
                    // 'css/main.css': ['sass/*.scss', 'sass/partials/*.scss'],
                    '_site/assets/css/main.css': ['/assets/css/*.scss', '/assets/css/custom/**/*.scss']
                }
            }/*,
            dev: {
                files: {
                    // 'css/main.css': ['sass/!*.scss', 'sass/partials/!*.scss'],
                    '_site/assets/css/main.css': ['/assets/css/!*.scss', '/assets/css/custom/!**!/!*.scss']
                }
            }*/

        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 4 version, IE 9'
                    }), // add vendor prefixes.
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: '_site/assets/css/main.css'
            }
        },
        // uglify: {
        //     dist: {
        //         src: '_site/assets/js/source.js',
        //         dest: '_site/assets/js/source.js'
        //     }
        // },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    '_site/assets/js/source.js': 'assets/js/source.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    '_site/assets/js/source.js': ['_site/assets/js/source.js']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: '_site/',
                src: ['**/*.html'],
                dest: '_site/'
            }
        }, // htmlmin

        watch: {
            imagemin: {
                files: ['assets/_img-temp/**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                tasks: ['imagemin']
            },
            bootlint: {
                files: ['_site/*.html'],
                tasks: ['bootlint']
            },

            // content: {
            //     files: ['_site/**/*.*'],
            //     tasks: ['newer:htmlmin'],
            //     options: {
            //         livereload: false,
            //         spawn: false
            //     }
            // },
            css: {
                files: ['/assets/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            babel: {
                files: 'assets/js/source.js',
                tasks: ['babel']
            }

            // scripts: {
            //     files: ['/assets/js/*.js'],
            //     tasks: ['uglify'],
            //     options: {
            //         livereload: true,
            //         spawn: true
            //     }
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-newer');

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // grunt.registerTask('default', ['bootlint','newer:imagemin','watch']);

    grunt.registerTask('dev', ['bootlint','newer:imagemin','babel','watch']);
    grunt.registerTask('prod', ['newer:htmlmin', 'postcss', 'uglify']); // Run jekyll build / serve first


};
