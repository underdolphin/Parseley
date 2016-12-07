//    Copyright 2016 underdolphin(masato sueda)
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

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