var gulp = require('gulp'),
    less = require('gulp-less');

// LESS
gulp.task('less', function () {
  return gulp.src('./test.less')
    .pipe(less().on('error', function (err) {
      console.log(err);
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['less']);
