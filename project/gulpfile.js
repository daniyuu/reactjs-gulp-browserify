/**
 * Created by v-yueych on 4/22/2016.
 */
/**
 * Created by v-yueych on 4/21/2016.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var react = require('gulp-react');

var concat = require('gulp-concat');

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    CSS: ['src/css/*.css', 'src/css/**/*.css'],
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/js/App.js'
};

gulp.task('build-css', function () {
    gulp.src(path.CSS) // Get source files
        .pipe()
        .pipe(gulp.dest(path.DEST)); // Outputs the file in the destination folder
});

gulp.task('copy', function () {
    gulp.src(path.HTML) // Get source files
        .pipe(gulp.dest(path.DEST)); // Outputs the file in the destination folder
});

gulp.task('transform', function () {
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('watch', function () {
    gulp.watch(path.ALL, ['transform', 'copy', 'replaceHTML']);
    gulp.watch(path.CSS, ['concatCss']);

    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.OUT,
            'css': 'src/css/style.css'
        }))
        .pipe(gulp.dest(path.DEST));

    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function () {
            watcher.bundle()
                .pipe(source(path.OUT))
                .pipe(gulp.dest(path.DEST_SRC));
            console.log('Updated');

            browserify({
                entries: [path.ENTRY_POINT],
                transform: [reactify]
            })
                .bundle()
                .pipe(source(path.OUT))
                .pipe(streamify(uglify(path.OUT)))
                .pipe(gulp.dest(path.DEST_BUILD));

        })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function () {
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify]
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function () {
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT,
            'css': 'build/style.min.css'
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('concatCss', function () {
    return gulp.src(path.CSS)
        .pipe(concatCss("src/css/style.css"))
        .pipe(gulp.dest('dist'));

});

gulp.task('cleanCss', function () {
    return gulp.src('dist/src/css/*.css')
        .pipe(cleanCSS({compatibility: ['ie8', 'chrome']}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/build'));

});

gulp.task('source', ['replaceHTML', 'concatCss']);
gulp.task('default', ['cleanCss','build']);
