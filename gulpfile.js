var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , sass = require('gulp-sass')
  , connect = require('gulp-connect')
  , concat = require('gulp-concat')
  , streamify = require('gulp-streamify')
  , uglify = require('gulp-uglify')

  , filePaths =
    { javaScript:
      { app: './app/js/app/app.js'
      , vendor:
        [ './app/js/vendor/jquery.js'
        , './app/js/vendor/md5.js'
        , './app/js/vendor/select2.js'
        ]
      , angular:
        [ './app/js/vendor/angularjs/angular.js'
        , './app/js/vendor/angularjs/angular-animate.js'
        , './app/js/vendor/angularjs/angular-ui-router.js'
        , './app/js/vendor/angularjs/angular-sanitize.js'
        , './app/js/vendor/angularjs/angular-cookies.js'
        , './app/js/vendor/angularjs/select2.js'
        ]
      }
    , sass: ['./app/sass/main.sass']
    , html: ['./app/html/*.html']
    , images: './app/images/**/*'
    , output: './build/'
    }

gulp.task('jsApp', function () {
  browserify(filePaths.javaScript.app)
    .bundle()
    .pipe(source('app.js'))
    .pipe(streamify(uglify({ mangle: false })))
    .pipe(gulp.dest(filePaths.output + 'js/'))
})

gulp.task('jsAngular', function () {
  gulp.src(filePaths.javaScript.angular)
    .pipe(concat('angular.js'))
    .pipe(gulp.dest(filePaths.output + 'js/'))
})

gulp.task('jsVendor', function () {
  gulp.src(filePaths.javaScript.vendor)
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(filePaths.output + 'js/'))
})

gulp.task('sass', function () {
  gulp.src(filePaths.sass)
    .pipe(sass())
    .pipe(gulp.dest(filePaths.output))
})

gulp.task('html', function () {
  gulp.src(filePaths.html)
    .pipe(gulp.dest(filePaths.output))
})

gulp.task('images', function () {
  gulp.src(filePaths.images)
    .pipe(gulp.dest(filePaths.output + 'images/'))
})

gulp.task('runServer', function () {
  connect.server({
    root: './build/'
  , host: '*'
  , port: '5001'
  })
})

gulp.task('watch', function() {
  gulp.watch('./app/js/**/*', ['jsApp'])
  gulp.watch('./app/html/**/*', ['html'])
  gulp.watch('./app/sass/**/*', ['sass'])
  gulp.watch('./app/images/**/*', ['images'])
})

gulp.task('default', ['watch', 'jsApp', 'sass', 'html', 'images', 'jsVendor', 'jsAngular', 'runServer'])
gulp.task('build', ['jsApp', 'sass', 'html', 'images', 'jsVendor', 'jsAngular'])
gulp.task('server', ['runServer'])