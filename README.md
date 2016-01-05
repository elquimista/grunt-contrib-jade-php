# grunt-contrib-jade-php

> Jade Template Engine for PHP, powered by [tale-jade](https://github.com/Talesoft/tale-jade).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-jade-php --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-jade-php');
```

## The "jadephp" task

This plugin requires [composer](http://getcomposer.org/) in order to install PHP dependencies. Please follow the [installation instructions](http://getcomposer.org/doc/00-intro.md#system-requirements) before installing this plugin.

### Overview
In your project's Gruntfile, add a section named `jadephp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jadephp: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.pretty
Type: Bool
Default value: false

Enables line break for html output.

### Usage Examples

#### Simple file mapping

```js
grunt.initConfig({
  jadephp: {
    compile: {
      files: {
        'dest/file1.html': ['src/file1.jade'],
      },
    },
  },
})
```

#### All jade files
This example compiles all jade files in a directory and adds a html extension.

```js
grunt.initConfig({
  jadephp: {
    compile: {
      files: [{
        expand: true,
        src: ['src/templates/**/*.jade'],
        dest: 'dest/templates',
        ext: '.html'
      }],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
