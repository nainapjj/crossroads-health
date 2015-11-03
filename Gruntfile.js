module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/foundation/scss'],
          sourcemap: "none"
        },
        files: {
          'stylesheets/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('css', ['sass']);

};
