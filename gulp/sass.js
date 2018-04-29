var gulp = require('gulp'),
    notify = require('gulp-notify'),
    cnf = require('../package.json').config,
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');


gulp.task('sass', function(){
  return gulp.src(cnf.src.sass)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    //.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 version'],
      cascade: false
    }))
    //.pipe(cssnano())
    /*.pipe(rename({
      dirname: "",
      basename: "main",
      prefix: "",
      suffix: ".min",
      extname: ".css"
    }))*/
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('sass:watch', function(){
  gulp.watch('./src/sass/**/*.*', ['sass']);
});