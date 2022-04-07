const { src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// styles tasks
function compileStyl() {
    return src('./styles/stylus/style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(dest('./styles/css'));
}

function watchStyl() {
    watch('./styles/stylus/style.styl', compileStyl);
}

// script tasks
function convJavascript() {
    return src('./script/app.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename('app.mini.js'))
        .pipe(dest('./script'));
}

function watchScript() {
    watch('./script/app.js', convJavascript);
}


exports.watchScript = watchScript;
exports.watchStyl = watchStyl;