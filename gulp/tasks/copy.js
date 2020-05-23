module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src([
      'fonts/**/*.{woff,woff2}',
      'js/external/*.js',
    ], {
      base: '.'
    })
      .pipe($.gulp.dest('build'));
  });
};