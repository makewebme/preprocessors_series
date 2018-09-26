const gulp = require('gulp')
const scss = require('gulp-sass')
const bs = require('browser-sync').create()

gulp.task('styles', () => {
  return gulp.src('style.scss')
    .pipe(scss())
    .pipe(gulp.dest('.'))
    .pipe(bs.stream())
})

gulp.task('watch', () => {
  gulp.watch('**/*.scss', gulp.series('styles'))
})

gulp.task('bs', () => {
  bs.init({
    server: { baseDir: '.' }
  })
})

gulp.task(
  'default',
  gulp.parallel(
    gulp.series('styles', 'watch'),
    'bs'
  )
)
