const gulp = require("gulp");
const sass = require("gulp-sass");
const { series } = require("gulp");

sass.compiler = require("node-sass");

gulp.task("base", () => {
  return gulp.src("./src/base/base.css").pipe(gulp.dest("./dist"));
});

gulp.task("helpers", () => {
  return gulp.src("./src/helpers/dashvar-helpers.js").pipe(gulp.dest("./dist"));
});

gulp.task("build", series("base", "helpers"));
