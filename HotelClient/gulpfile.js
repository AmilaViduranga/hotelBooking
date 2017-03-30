var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
/*
 * sync the page when page rendering
 */
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    port: 8004
  })
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['useref'],
    callback
  )
})

gulp.task('start', function (callback) {
  runSequence(['browserSync'],
    callback
  )
})