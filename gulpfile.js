const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

gulp.task('stylus', function () {
    return gulp
        .src('./stylus/main.styl')
        .pipe(plumber())
        .pipe( stylus({
            compress: true,
            use: [nib()]
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('pug', function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./html/'))
});

gulp.task('watch', function() {
    gulp.watch('./**/*.styl', ['stylus']);
    gulp.watch('./pug/*.pug', ['pug']);
});

gulp.task('default', ['watch', 'stylus', 'pug']);