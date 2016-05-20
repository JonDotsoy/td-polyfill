export let Log = {}
export let analytics = {}

export let td = {
	version: '/* @echo VERSION */',
	Log,
	analytics,
}


var TD_POLYFILL_GLOBALLY = String( process.env.TD_POLYFILL_GLOBALLY ).toLowerCase()
var GLOBALLY = (
	TD_POLYFILL_GLOBALLY == 'undefined' ||
	TD_POLYFILL_GLOBALLY == 'null' ||
	TD_POLYFILL_GLOBALLY == 'true'
)

/**
 * Globalizes elements
 */
if ( GLOBALLY ) {
	// global.Log = Log
	// global.analytics = analytics
	global.td = td
}

export default td
