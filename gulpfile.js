const gulp = require('gulp');
const sass = require('gulp-sass');
const plugins = require( 'gulp-load-plugins' )();

const config = {
    scssSrc: './src/scss/**/*.scss',
    cssDest: './dist/css',
    scssProdOptions: {
        outputStyle: 'compressed'
    }
};

gulp.task('sass', function () {
    return gulp.src(`${config.scssSrc}`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.cssDest));
});

gulp.task('sass:prod', function() {
    return gulp.src(`${config.scssSrc}`)
        .pipe(sass(config.sassProdOptions).on('error', sass.logError))
        .pipe(plugins.rename('style.min.css'))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task('watch', function () {
    gulp.watch(`${config.scssSrc}`, gulp.parallel('sass'));
});

gulp.task('build', gulp.parallel('sass:prod'));


gulp.task('default', gulp.parallel('watch'))