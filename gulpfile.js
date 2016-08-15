/// <reference path="typings/index.d.ts" />
'use strict'
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpts = require('gulp-typescript');
const prettydiff = require('gulp-prettydiff');

const tsProject = gulpts.createProject('tsconfig.json', {
    typescript: require('typescript'),
    module: "commonjs"
});

gulp.task('tsCompile', () => {
    gulp.src('src/**/*.ts')
        .pipe(plumber())
        .pipe(gulpts(tsProject))
        .js
        .pipe(prettydiff({
            lang: 'js',
            mode: 'minify'
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('start', ['tsCompile'], () => {
    gulp.watch('src/**/*.ts', ['tsCompile']);
});

gulp.task('default', ['start'], () => {

});