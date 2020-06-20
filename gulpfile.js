const gulp = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");

// To prevent rewriting the source and build folder locations
const paths = {
    source: "./src",
    build: "./build"
};
 
function javascriptBuild() {
    return (
        browserify({
            entries: [`${paths.source}/main.js`],
            transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
            .bundle()
            .pipe(source("bundle.js"))
            // Turn it into a buffer!
            .pipe(buffer())
            // And uglify
            .pipe(uglify())
            .pipe(gulp.dest(`${paths.build}/scripts`))
    );
}
 
exports.build = javascriptBuild;