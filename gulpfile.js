const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('simple', shell.task([
  'cucumber.js simple/features -r simple/steps'
]));

gulp.task('background', shell.task([
  'cucumber.js background/features -r background/steps'
]));

gulp.task('outline', shell.task([
  'cucumber.js outline/features -r outline/steps'
]));

gulp.task('datatable', shell.task([
  'cucumber.js datatable/features -r datatable/steps'
]));

gulp.task('hooks', shell.task([
  'cucumber.js hooks/features -r hooks/steps'
]));

gulp.task('world', shell.task([
  'cucumber.js world/features -r world/steps'
]));

gulp.task('events', shell.task([
  'cucumber.js events/features -r events/steps'
]));

