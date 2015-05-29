'use strict';

// core plugins
var gulp = require('gulp'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),

    // output destination
    DEST = 'www/optimized/',
    DEST_V2 = 'www/optimized/v2/';

//below goes v2 optimization
gulp.task('css:clean_v2', function (cb) {
    del([
        DEST_V2 + '/combined.min.css',
        DEST_V2 + '/combined.css'
    ], cb);
});

gulp.task('css:compress_v2', function () {
    return gulp.src([
        'www/css/new/main.css',
        'www/css/new/pages.css',
        'www/css/new/ui.css',
        'www/css/new/font-awesome.css',
        'www/css/new/scrollbar.css',
        'www/css/new/chosen.css'
    ])
        .pipe(concat('combined.css'))
        .pipe(gulp.dest(DEST_V2))
        .pipe(rename({extname: '.min.css'}))
        .pipe(csso())
        .pipe(gulp.dest(DEST_V2));
});

gulp.task('js:clean_v2', function (cb) {
    del([
        DEST_V2 + '/combined.min.js',
        DEST_V2 + '/combined.js'
    ], cb);
});

gulp.task('js:compress_v2', function () {
    return gulp.src([
        "www/js/new/lib/jquery.js",
        "www/js/new/lib/jquery-ui.min.js",
        "www/js/new/main.js",
        "www/js/new/components.js",
        "www/js/new/components/adder.js",
        "www/js/new/utils.js",
        "www/js/new/lib/chosen.jquery.min.js",
        "www/js/new/lib/scrollbar.min.js",
        "www/js/new/constructors/switcher.js",
        "www/js/new/constructors/popup.js",
        "www/js/new/constructors/combobox.js",
        "www/js/new/constructors/advisor.js",
        "www/js/new/constructors/scroller.js",
        "www/js/new/lib/fineuploader.js",
        "www/js/new/lib/sortable.js"
    ])
        .pipe(concat('combined.js'))
        .pipe(gulp.dest(DEST_V2))
        .pipe(rename({extname: '.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest(DEST_V2));
});


// below goes v1 optimization

gulp.task('css:clean', function (cb) {
    del([
        DEST + '/combined.min.css',
        DEST + '/combined.css'
    ], cb);
});

gulp.task('css:compress', function () {
    return gulp.src([
        'www/css/main.css',
        'www/css/work.css',
        'www/css/calendar.css',
        'www/css/chosen.css',
        'www/css/cropper.css',
        'www/css/fineuploader.css',
        'www/css/print.css'
    ])
        .pipe(concat('combined.css'))
        .pipe(gulp.dest(DEST))
        .pipe(rename({extname: '.min.css'}))
        .pipe(csso())
        .pipe(gulp.dest(DEST));
});

gulp.task('js:clean', function (cb) {
    del([
        DEST + '/combined.min.js',
        DEST + '/combined.js'
    ], cb);
});

gulp.task('js:compress', function () {
    return gulp.src([
        'www/js/lib/jquery-1.7.1.min.js',
        'www/js/lib/jquery.form-2.95.js',
        'www/js/lib/jquery.MultiFile.pack.js',
        'www/js/lib/fineuploader.js',
        'www/js/lib/chosen.jquery.min.js',
        'www/js/require.js',
        'www/js/main.js',
        'www/js/functions.js',
        'www/js/calendar.js',
        'www/js/comments.js',
        'www/js/crunchbase.js',
        'www/js/favorites.js',
        'www/js/feed.js',
        'www/js/items.js',
        'www/js/listtables.js',
        'www/js/search.js',
        'www/js/tags.js',
        'www/js/history/history.js'
    ])
        .pipe(concat('combined.js'))
        .pipe(gulp.dest(DEST))
        .pipe(rename({extname: '.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest(DEST));
});


// Default Task
gulp.task(
    'default',
    [
        'js:clean',
        'js:compress',
        'css:clean',
        'css:compress',
        'js:clean_v2',
        'js:compress_v2',
        'css:clean_v2',
        'css:compress_v2'
    ]
);