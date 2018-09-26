var gulp = require('gulp');
var sass = require('gulp-sass');
let watch = require('gulp-watch-sass');
let rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(rename({
            extname: '.css'
        }));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/scss/*.scss', ['sass']);
});