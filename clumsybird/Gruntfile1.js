/*global module:false*/
module.exports = function(grunt) {
    var sourceFiles = [
        'clumsybird/js/game.js',
        'clumsybird/js/resources.js',
        'clumsybird/js/entities/entities.js',
        'clumsybird/js/entities/HUD.js',
        'clumsybird/js/screens/title.js',
        'clumsybird/js/screens/play.js',
        'clumsybird/js/screens/gameover.js',
    ];

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                report: 'min',
                preserveComments: 'some'
            },
            dist: {
                files: {
                    'clumsybird/build/clumsy-min.js': [
                        sourceFiles
                    ]
                }
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },

            beforeConcat: {
                files: {
                    src: sourceFiles
                }
            },

            afterConcat: {
                files: {
                    src: [ sourceFiles ]
                }
            }
        },

        connect : {
            root : {
                options : {
                    port : 8001,
                    keepalive : true,
                    host: '*'
                }
            }
        },

        clean: {
            dist: [
                'clumsybird/build/clumsy-min.js'
            ],
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-connect");


    // Default task.
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('lint', ['jshint:beforeConcat', 'concat', 'jshint:afterConcat']);
};
