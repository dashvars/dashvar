const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const { series } = require("gulp");

sass.compiler = require("node-sass");

gulp.task("main", () => {
  return gulp
    .src("./src/tailvars/main.scss")
    .pipe(concat("tailvars.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("main-no-media", () => {
  return gulp
    .src("./src/tailvars/main-no-media.scss")
    .pipe(concat("tailvars-no-media.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("base", () => {
  return gulp.src("./src/base/base.css").pipe(gulp.dest("./dist"));
});

gulp.task("build", series("main", "main-no-media", "base"));
