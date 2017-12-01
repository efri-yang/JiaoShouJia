

// const gulp = require("gulp");

// const htmls = require('./gulp/htmls');
// const styles = require('./gulp/styles');
// const scripts = require('./gulp/scripts');
// const images = require('./gulp/images');
// const others = require('./gulp/others');
// const watchs = require('./gulp/watch');
// const servers = require('./gulp/server');
// const cleans = require('./gulp/clean');





// gulp.task('default', gulp.series(cleans, 
// 	gulp.parallel(
// 		 gulp.series(scripts.script,scripts.cScript,styles.style,styles.cStyle,htmls.html,htmls.cHtml),images.image,others.other,watchs,servers.server)));



var gulp         = require('gulp');
var rev = require('gulp-rev');
 
gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});
 
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});
 

 
var revCollector = require('gulp-rev-collector');

 
gulp.task('rev', function () {
    return gulp.src(['rev/**/*.json', 'src/**/*.html'])
        .pipe(revCollector({
            replaceReved: true
        }))
      
        .pipe( gulp.dest('dist') );
});


