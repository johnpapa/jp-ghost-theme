var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    cmq = require('gulp-combine-media-queries');

gulp.task('bundle-minify-js', function () {
  return gulp
    .src(['assets/js/*.js', '!assets/js/app.js'])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets/js'))
});

gulp.task('styles-build', function() {
  return gulp
    .src('assets/css/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'));
})

gulp.task('build-all', ['bundle-minify-js', 'styles-build'], function () {
  var source = [
    './assets/**/*',
    './partials/**/*',
    '*.hbs'
  ];
  return gulp
    .src(source, {base: './'})
    .pipe(gulp.dest('dist'));
})

gulp.task('default', ['build-all']);
