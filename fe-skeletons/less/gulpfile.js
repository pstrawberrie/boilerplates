var gulp = require('gulp'),
    less = require('gulp-less'),
    size = require('gulp-size');

// LESS
gulp.task('less', function () {
  return gulp.src('./test.less')
    .pipe(less().on('error', function (err) {
      console.log(err);
    }))
    .pipe(size())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./**/*.less', ['less']);
});


gulp.task('default', ['less', 'watch']);
