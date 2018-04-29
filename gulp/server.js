var gulp = require('gulp'),
    cnf = require('../package.json').config,
    browserSync = require('browser-sync').create();

gulp.task('server', function() {
  browserSync.init({
    server: {
        baseDir: "dist"
    },
    files: ['dist/**/*.*']
	  //notify: false,
	  //tunnel: true,
	  //host: 'localhost',
	  //port: 9000,  
  });
});