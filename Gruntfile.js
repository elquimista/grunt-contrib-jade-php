/*
 * grunt-contrib-jade-php
 * https://github.com/clthck/grunt-contrib-jade-php
 *
 * Copyright (c) 2015 clthck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    jadephp: {
      basic_html: {
        options: {
        },
        files: {
          'tmp/basic.html': ['test/fixtures/basic.jade'],
        },
      },
      invalid: {
        options: {
          writeError: false,
        },
        files: {
          'tmp/invalid.html': ['test/fixtures/invalid.jade'],
        },
      },
      php_code: {
        files: {
          'tmp/php_code.php': ['test/fixtures/php_code.jade'],
        },
      },
      invalidWrite: {
        files: {
          'tmp/invalidWrite.html': ['test/fixtures/invalid.jade'],
        },
      },
      unknownFilter: {
        files: {
          'tmp/unknown_filter.html': ['test/fixtures/unknown_filter.jade']
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-release');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jadephp', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
