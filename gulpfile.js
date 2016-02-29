/* File: gulpfile.js */

// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});

gulp.task('copyImages', function() {
  // copy any html files in source/ to public/
  gulp.src('source/images/*.*').pipe(gulp.dest('public/assets/images'));
});


// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('build-js', function() {
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript'));
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
