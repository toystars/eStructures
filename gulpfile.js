// gulpfile.js
var Server = require('karma').Server;
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var isTravis = process.env.TRAVIS || false;

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: isTravis
  }, done).start();
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('eStructures.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('eStructures.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['tdd', 'lint', 'scripts', 'watch']);
