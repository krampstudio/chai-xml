module.exports = function(grunt) {
    'use strict';

    //load npm tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),        
        
        mochaTest: {
          test: {
            options: {
              reporter: 'spec'
            },
            src: ['test/**/*.js']
          }
        },
    });

    grunt.registerTask('test', ['mochaTest:test']);
};
