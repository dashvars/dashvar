const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const { series } = require("gulp");

sass.compiler = require("node-sass");

gulp.task("base", () => {
  return gulp.src("./src/base/base.css").pipe(gulp.dest("./dist"));
});

gulp.task("build", series("base"));
