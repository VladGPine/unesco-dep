const gulp = require('gulp'),
      less = require('gulp-less'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      cssnano = require('gulp-cssnano'),
      babel = require('gulp-babel'),
      strip = require('gulp-strip-comments'),
      pug = require('gulp-pug'),
      ghPages = require('gulp-gh-pages')

const template = done => {
  gulp.src('app/pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
  done();
}

const styles = done => {
  gulp.src('app/less/**/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename('styles.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
  done()
}

const scripts = done => {
  gulp.src('app/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('index.js'))
    .pipe(strip())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
  done()
}

const brSync = done => {
  browserSync.init({
    server: {
        baseDir: "./dist"
    }
  })
  done()
}

const watch = done => {
  gulp.watch('app/pug/**/*.pug', gulp.series(template))
  gulp.watch('app/less/**/*.less', gulp.series(styles))
  gulp.watch('app/js/**/*.js', gulp.series(scripts))
  done()
}

const deploy = done => {
  gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl: 'https://github.com/VladGPine/unesco-dep',
      branch: 'gh-pages'
    }))
  done()
}

gulp.task('watch', watch)
gulp.task('pug', template)
gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('brSync', brSync)
gulp.task('deploy', deploy)

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'styles', 'scripts'),
  gulp.parallel('watch', 'brSync')
))