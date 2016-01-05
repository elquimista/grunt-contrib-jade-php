/*
 * grunt-contrib-jade-php
 * https://github.com/clthck/grunt-contrib-jade-php
 *
 * Copyright (c) 2015 clthck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var async = require('async');
  var path = require('path');

  var pretty;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jadephp', 'Jade Template Engine for PHP, powered by tale-jade.', function() {
    var done = this.async();

    var options = this.options({
      separator: grunt.util.linefeed,
      pretty: false
    });

    pretty = options.pretty;

    grunt.verbose.writeflags(options, 'Options');

    async.forEach(this.files, function(f, callback) {
      var validFiles = removeInvalidFiles(f);

      async.map(validFiles, compileJade, function(err, results) {
        if (err) {
          grunt.log.warn(err);
          if (options.writeError) {
            writeFile(f.dest, err);
          }
        } else {
          writeFile(f.dest, results.join(grunt.util.normalizelf(options.separator)));
        }
        callback();
      });
    }, done);
  });

  var compileJade = function(item, cb) {
    var args = [path.join(__dirname, '../bin/jadephp'), '-p', pretty, item ];

    var child = grunt.util.spawn({
      // cmd: path.join(__dirname, '../bin/jadephp'),
      cmd: 'php',
      args: args
    }, function(error, result, code) {
      cb(error, result.stdout);
    });
  };

  var removeInvalidFiles = function(files) {
    return files.src.filter(function(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    });
  };

  var writeFile = function(path, output) {
    if (output.length < 1) {
      grunt.log.warn('Destination (' + path + ') not written because compiled files were empty.');
    } else {
      grunt.file.write(path, output);
      grunt.log.writeln('File ' + path.cyan + ' created.');
    }
  };

};
