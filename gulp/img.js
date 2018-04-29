var gulp = require('gulp'),
    notify = require('gulp-notify'),
    cnf = require('../package.json').config,
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin');


gulp.task('img', function(){
  gulp.src(cnf.src.img.noCompress)
    .pipe(plumber())
    .pipe(gulp.dest(cnf.dist.img));
  gulp.src(cnf.src.img.Compress)
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: false},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest(cnf.dist.img));
});

gulp.task('img:watch', function(){
  gulp.watch('src/img/**/*.*', ['img']);
});