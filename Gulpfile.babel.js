import gulp from 'gulp'
import babel from 'gulp-babel'
import preprocess from 'gulp-preprocess'
import pkg from './package.json'


/* Alias */
let Src = gulp.src.bind( gulp )
let Task = gulp.task.bind( gulp )
let Dest = gulp.dest.bind( gulp )


Task( 'build', () => Src( [ `src/**/*.js` ] )
	.pipe( babel( {
		presets: [ 'es2015' ]
	} ) )
	.pipe( preprocess( {
		context: {
			VERSION: pkg.version
		}
	} ) )
	.pipe( Dest( '.' ) ) )


Task( 'default', [ 'build' ] )
