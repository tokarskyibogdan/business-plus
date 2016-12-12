const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const bootstrap = require('bootstrap-styl');
const plumber = require('gulp-plumber');

gulp.task('stylus', function () {
    return gulp
        .src('./stylus/main.styl')
        .pipe(plumber())
        .pipe( stylus({
            compress: true,
            use: [bootstrap(), nib()]
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.styl', ['stylus']);
});

gulp.task('default', ['watch', 'stylus']);