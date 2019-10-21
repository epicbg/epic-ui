const gulp = require('gulp');
const plugins = require( 'gulp-load-plugins' )();

const options = {
    main_js: 'src/js/main.js',
    root: 'src',
    js_root: 'src/js',
    all_files: ['src/**/*'],
    js_bundle: 'bundle',
    temp_root: 'dist',
    temp_index: 'dist/index.html',
    temp_bundle: 'dist/js/bundle.js',
    temp_js_root: 'dist/js',
    temp_all_files: 'dist/**',
    temp_js_files: ['dist/js/**/*.js', '!dist/js/vendor/**/*.js'],
    temp_css_root: 'dist/css',
    temp_css_files: ['dist/css/**/*.css', '!dist/css/vendor/**/*.css'],
    watching: false
};

// -------------------------------------
//   Task: enable-watch-mode
// -------------------------------------
gulp.task('enable-watch-mode', function() {
    options.watching = true;
});

// -------------------------------------
//   Task: watch:files
// -------------------------------------
gulp.task('watch:files', ['enable-watch-mode', 'bundle:js'], () => {});

// -------------------------------------
//   Task: serve:files
// -------------------------------------
gulp.task('serve:files', ['watch:files'], plugins.serve({
    root: [options.root, 'node_modules'],
    port: 8080
}));

// -------------------------------------
//   Task: watch:files
// -------------------------------------
gulp.task('bundle:js', [], plugins.watchify(function(watchify) {
    return gulp.src(options.main_js)
        .pipe(watchify({
            watch: options.watching
        }))
        .pipe(plugins.rename({
            basename: options.js_bundle
        }))
        .pipe(gulp.dest(options.js_root));
}));

// -------------------------------------
//   Task: default
// -------------------------------------
gulp.task('default', ['serve:files']);

// -------------------------------------
//   Task: clean:temp
// -------------------------------------
gulp.task('clean:temp', function () {
    return gulp.src(options.temp_root, {read: false})
        .pipe(plugins.clean());
});

// -------------------------------------
//   Task: copy:files
// -------------------------------------
gulp.task('copy:files', ['bundle:js', 'clean:temp'], function() {
    return gulp.src(options.all_files)
        .pipe(gulp.dest(options.temp_root));
});

// -------------------------------------
//   Task: build
// -------------------------------------
gulp.task('build', [
    'bundle:js',
    'copy:files',    
]);
