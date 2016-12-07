'use strict'
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const tsProject = gulpts.createProject('tsconfig.json', {
    typescript: require('typescript'),
    module: "commonjs",
    sortOutput: true
});

gulp.task('tsCompile', () => {
    gulp.src('src/**/*.ts')
        .pipe(plumber())
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('build/'));
});

gulp.task('browserify', () => {
    browserify({
            entries: ['./build/index.js']
        })
        .bundle()
        .pipe(source('parseley.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['tsCompile']);
    gulp.watch('build/**/*.js', ['browserify']);
});

gulp.task('default', ['tsCompile', 'browserify'], () => {
    gulp.start('watch')
});