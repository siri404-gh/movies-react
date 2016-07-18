var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var plug = require('gulp-load-plugins')({ lazy: true });
var babel = require('babel-core/register');

gulp.task('browserify',function(){
    browserify('./src/js/app.js')
        .transform('reactify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/js')) //we don't need to create this folder gulp will auto create this
});

//Then we create copy task

gulp.task('copy',function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('./src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('./src/js/vendor/*.*')
        .pipe(gulp.dest('dist/js/vendor'));
});

gulp.task('test', function () {
  return gulp.src('./src/js/components/**/test.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);
});
