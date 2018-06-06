var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require("browser-sync").create();
var imagemin = require('gulp-imagemin');
 
gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});
 
gulp.task('compress', function() {
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img2/'))
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});
gulp.task('default', ['sass:watch']);