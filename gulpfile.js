var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('html-watch', ['html'], browserSync.reaload);
gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
  gulp.watch('src/*.html', ['html-watch']);
  gulp.watch('build/*.js', browserSync.reload);
});

gulp.task('html', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('build'))
      .pipe(browserSync.stream({match: '**/*.html'}));
});

gulp.task('default', ['html', 'serve']);
