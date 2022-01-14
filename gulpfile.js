const htmlmin = require("gulp-htmlmin")
const gulp = require("gulp")
const uglify = require("gulp-uglify")
const uglifycss = require("gulp-uglifycss")
const babel = require("gulp-babel")
const webserver = require("gulp-webserver")
const watch = require("gulp-watch")

function modificandoJs (){
	return gulp.src("src/**/*.js")
		.pipe(babel({
			comments: false,
			presets: ["env"]
		}))
		.pipe(uglify()).on("error", erro => console.log(err))
		.pipe(gulp.dest("build"))
}

function modificandoCss(){
	return gulp.src("src/**/*.css")
		.pipe(uglifycss({
			"uglifyComments": true
		}))
		.pipe(gulp.dest("build"))
}

function modificandoHtml(){
	return gulp.src("src/index.html")
		.pipe(htmlmin({collapseWhiteSpace: true}))
		.pipe(gulp.dest("build"))
}

function copiarImgs(callback){
	gulp.src("src/imagens/desktop/*.*")
	.pipe(gulp.dest("build/imagens/desktop"))
	gulp.src("src/imagens/mobile/*.*")
	.pipe(gulp.dest("build/imagens/mobile"))
	return callback()
}

function servidor(){
	return gulp.src("build")
		.pipe(webserver({
			port: 8080,
			open: false,
			livereload: true
		}))
}

function monitorarArquivos(callback){
	watch("src/**/*.html", modificandoHtml)
	watch("src/**/*.js", modificandoJs)
	watch("src/**/*css", modificandoCss)
	return callback
}


exports.default = gulp.series(gulp.parallel(modificandoJs, modificandoCss, 
modificandoHtml), copiarImgs, servidor, monitorarArquivos)
