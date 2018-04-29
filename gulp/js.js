var gulp = require('gulp'),
    notify = require('gulp-notify'),
    cnf = require('../package.json').config,
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    include = require("gulp-include"),
    uglify = require('gulp-uglify');


gulp.task('js', function(){
  return gulp.src(cnf.src.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(include({
      extensions: "js",
      hardFail: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dist.js));
});

gulp.task('js:watch', function(){
  gulp.watch('src/js/**/*.*', ['js']);
});