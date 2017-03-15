/**
 * Created by wangzhongwei on 2017/3/10.
 */
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    minify=require('gulp-minify-css'),
    rename=require('gulp-rename'),
    sass=require('gulp-sass'),
    webserver=require('gulp-webserver');
gulp.task('reduce',function(){
    gulp.src('css/*.css')
        .pipe(minify())
        .pipe(rename('min.css'))
        .pipe(gulp.dest('css/'))
})
gulp.task('updataJs',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
})
gulp.task('webserver',['start'], function() {
    gulp.src('./')
        .pipe(webserver({
            port:8080,
            livereload: true,
            directoryListing: true,
            open: 'index.html'
        }));
});
gulp.task('start', function(){
    gulp.watch('css/*.css',['reduce']);
    gulp.watch('js/*.js',['updataJs']);
    gulp.watch('index.html')
});