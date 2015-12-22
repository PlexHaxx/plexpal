module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {
            all: ['views/*.js', 'app/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
