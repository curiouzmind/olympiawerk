"use strict"

var gulp = require('gulp');
//css
var sass = require('gulp-sass');
// var cssconcat = require('gulp-concat-css');
var concat = require('gulp-concat');
var cssminify = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
//js
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
//others
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');


//variables
var htmlinput = "*.html";
var htmloutput = "dist/";
var cssinput = "scss/**/*.scss";
var cssoutput = "css/";
var jsinput = "scripts/**/*.js";
var jsoutput = "dist/js";
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
            baseDir: "./"
        }
    });
});
// dev
	//sass
	gulp.task('sass', function () {
	  return gulp
	    .src(cssinput)
	    .pipe(sourcemaps.init())
	    .pipe(sass(sassOptions).on('error', sass.logError))
	    .pipe(autoprefixer(autoprefixerOptions))
	    .pipe(concat("olympiawerk.min.css"))
	    // .pipe(cssminify())
	    .pipe(sourcemaps.write("maps"))
	    .pipe(gulp.dest(cssoutput))
	    .pipe(browserSync.reload({stream: true}));
	});
	// css copy
	gulp.task('copyCss', function() {
		return gulp
			.src('css/**/*.css')
			.pipe(gulp.dest('dist/css/'))
			.pipe(browserSync.reload({stream:true}));
	});
	// sass doc
	gulp.task('sassdoc', function () {
	  return gulp
	    .src(cssinput)
	    .pipe(sassdoc(sassdocOptions))
	    .resume();
	});
	//js task
	gulp.task('js', function() {
	    return gulp.src(jsinput)
	                .pipe(concat("olympiawerk.min.js"))
	                .pipe(browserify())
	                .pipe(uglify())
	                .pipe(gulp.dest(jsoutput))
	                .pipe(browserSync.reload({stream: true}));
	});
	// html copy
	gulp.task('copyHtml', function() {
		return gulp
			.src(htmlinput)
			.pipe(gulp.dest(htmloutput));
	});


	//watch
	gulp.task('watch', ['sass','copyCss','js','copyHtml','browser-sync'], function() {
	  	gulp.watch(cssinput, ['sass']);
	  	gulp.watch('css/**/*.css', ['copyCss']);
	  	gulp.watch(jsinput, ['js']);
	    gulp.watch(htmlinput).on('change', browserSync.reload);
	});
	//default
	gulp.task('default', ['watch']);
//prod
