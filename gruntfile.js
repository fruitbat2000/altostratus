module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //jshint config 
    jshint: {
      files: ['js/components/*.js'],
      options: {
        sub:true,
        globals: {
          jQuery: true,
          console:true,
        },
        ignores: ["js/components/templates.js"]
      }
    },

    //handlebars config
    handlebars: {
      compile: {
        options: {
          namespace: 'hbs',
          processName: function(filename) {
            var pieces = filename.split("/");
            var filetype = pieces[pieces.length - 1].split('.');
            return filetype[0];
          },
        },
        files: {
          "js/components/templates.js" : ["js/templates/*.hbs"]
        }
      }
    },

    //watch
    watch: {
      styles: {
        files: ['css/**/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['js/components/*.js'],
        tasks: ['jshint', 'concat']
      },
      templates: {
        files: ['js/templates/*.hbs'],
        tasks: ['handlebars']
      }
    },

    //concat
    concat: {
      options: {
        separator: ' '
      },
      scripts: {
        src: ['js/components/templates.js', 'js/components/init.js', 'js/components/models.js', 'js/components/collections.js', 'js/components/helpers.js', 'js/components/views.js', 'js/components/main.js'],
        dest: 'js/script.js'
      }
    },

    //less
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/style.css": "css/less/style.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          yuicompress: true
        },
        files: {
          "css/style.css": "css/less/style.less"
        }
      }
    },

    //uglify
    uglify: {
      my_target: {
        files: {
          'js/min/script.min.js' : 'js/dist/dist.js'
        }
      }
    }
  });

  //load modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  //default task 
  grunt.registerTask('default', ['jshint', 'handlebars', 'less']);

  //other tasks 
  grunt.registerTask('styles', 'less');
  grunt.registerTask('test', 'jshint');
  grunt.registerTask('compile', ['concat', 'uglify']);
};