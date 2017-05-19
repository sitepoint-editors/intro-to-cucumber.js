const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('simple', shell.task([
  'cucumber.js simple/features -r simple/steps'
]));

gulp.task('background', shell.task([
  'cucumber.js background/features -r background/steps'
]));

