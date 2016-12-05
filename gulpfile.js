"use strict"

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
//css
var sass = require('gulp-sass');
var cssminify = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
//js
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
//others
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var _ = require('lodash');

//variables
var htmlinput = "./**/*.html";
var cssinput = "assets/scss/main.scss";
var cssoutput = "css/";
var jsinput = ['assets/js/jquery.js','assets/js/bootstrap.js','assets/js/cmindzsite.js','assets/js/main.js','assets/js/**/*.{js,json}'];
var jsoutput = "js/";
var imginput = "assets/img/**/*.{jpg,png,gif,jpeg,ico}";
var imgoutput = "img/";
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};
var sassdocOptions = {
  dest: "./dist/css/sassdoc/"
};

//TASKS
// static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
          baseDir: ["./"],
          // baseDir: ["dist"],
          index: "home.html"
        },
        port: 8000
    });
});
// dev
	//sass
  //copy node_modules scss assets
  gulp.task('copy-assets-scss', function() {
      var assetsScss = {
          font: [
            './node_modules/roboto-fontface/css/**/*.scss'
          ],
          fontawesome: [
            './node_modules/font-awesome/scss/**/*.scss'
          ],
          bootstrap: [
            './node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'
          ],
          bootswatch: [
            './node_modules/bootswatch/paper/**/*.scss'
          ],
          hamburger: [
            './node_modules/hamburgers/_sass/hamburgers/**/*.scss'
          ]
      };
      _(assetsScss).forEach(function (assets, type) {
         gulp.src(assets).pipe(gulp.dest('assets/scss/'+type));
      });
  });
	gulp.task('sass', function () {
	  return gulp
      .src(cssinput)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(concat("olympiawerk.css"))
      .pipe(sourcemaps.write("maps"))
      .pipe(gulp.dest(cssoutput))
      .pipe(browserSync.reload({stream: true}));
	});
	// sass doc
	gulp.task('sassdoc', function () {
	  return gulp
	    .src(cssinput)
	    .pipe(sassdoc(sassdocOptions))
	    .resume();
	});
	//js task
  //copy node_modules js assets
  gulp.task('copy-assets-js', function() {
      var assetsJs = {
          js: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
          ]
      };
      _(assetsJs).forEach(function (assets, type) {
         gulp.src(assets).pipe(gulp.dest('assets/'+type));
      });
  });
	gulp.task('js', function() {
	    return gulp.src(jsinput)
        .pipe(sourcemaps.init())
        .pipe(concat("olympiawerk.js"))
        // .pipe(browserify())
        .pipe(sourcemaps.write("maps"))
        .pipe(gulp.dest(jsoutput))
        .pipe(browserSync.reload({stream: true}));
	});
  //img tasks
  gulp.task('img', function() {
      return gulp.src(imginput)
        .pipe(imagemin())
        .pipe(gulp.dest(imgoutput));
  });
	//watch
	gulp.task('watch', ['sass','js','img','browser-sync'], function() {
	  	gulp.watch("./assets/scss/**/*.scss", ['sass']);
      gulp.watch(jsinput, ['js']);
	  	gulp.watch(imginput, ['img']);
	    gulp.watch(htmlinput).on('change', browserSync.reload);
	});
	//default
	gulp.task('default', ['watch']);
//PROD
// html copy
gulp.task('copyHtml', function() {
  return gulp
    .src(htmlinput)
    .pipe(gulp.dest('dist/'));
});
// css copy
gulp.task('copyCss', function() {
  return gulp
    .src('css/**/*.css')
    .pipe(cssminify())
    .pipe(gulp.dest('dist/css/'));
});
// js copy
gulp.task('copyJs', function() {
  return gulp
    .src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});
// img copy
gulp.task('copyImg', function() {
  return gulp
    .src('img/**/*.{jpg,png,gif,jpeg}')
    .pipe(gulp.dest('dist/img/'));
});
