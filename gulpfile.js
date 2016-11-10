// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass'),    
    assets  = require('postcss-assets'),
    postcss = require('gulp-postcss'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer');

var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');

// Compile Our Sass 
gulp.task('sass', function() {
  
  return gulp.src('assets/sass/**/*.scss')
      .pipe(sass({ errLogToConsole: true}))
      .on('error', notify.onError('<%= error.message %>'))
      .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: true
      })) 
      .pipe(gulp.dest('assets/css'));
    
});
 
gulp.task('imgmin', function() {
    return gulp.src('assets/img/*')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('assets/img/'));
});

 
gulp.task('watch', function() {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

// Default Task 
gulp.task('default', ['sass', 'watch']); 
