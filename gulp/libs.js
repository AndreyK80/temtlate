var gulp = require('gulp'),
    notify = require('gulp-notify'),
    cnf = require('../package.json').config,
    plumber = require('gulp-plumber'),
    importCss = require('gulp-import-css'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    include = require("gulp-include"),
    uglify = require('gulp-uglify');


gulp.task('libs', function(){
  gulp.src(cnf.libs.css)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(importCss())
    .pipe(rename({
        dirname: "",
        basename: "libs",
        prefix: "",
        suffix: ".min",
        extname: ".css"
    }))
    .pipe(gulp.dest(cnf.dist.css));
  gulp.src(cnf.libs.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(babel())
    .pipe(include({
      extensions: "js",
      hardFail: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest(cnf.dist.js));
});

gulp.task('libs:watch', function(){
  gulp.watch(cnf.libs.css, ['libs']);
  gulp.watch(cnf.libs.js, ['libs']);
});