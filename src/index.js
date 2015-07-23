let beat = 60e3 / 140

const progress = () =>
	( new Date() % beat ) / beat

const colour   = fraction => {
	const bitten = Math.round( fraction * 255 ).toString( 16 )

	return '#' + bitten + bitten + bitten
} 

let states  = {
	0 : {
		children : 'HM',
		attrs: {
			style : {
				'color'     : 'white',
				'display'   : 'inline',
				'font-size' : '360px'
			}
		}
	},
	1 : {
		children : 'TZSCH',
		attrs : {
			style : {
				'color'     : 'black',
				'display'   : 'inline',
				'font-size' : '140px'
			}
		}
	}
}

const body = cito.vdom.create( {
	tag : 'body'
} )

document.documentElement.replaceChild( body.dom, document.body )

const pulse    = () => {
	const beatFraction = progress()


	cito.vdom.update( body, {
		tag   : 'body',
		attrs : {
			style : {
				'background-color' : colour( beatFraction ),
				'font-family'      : 'monospace',
				'line-height'      : '0',
				'position'         : 'fixed',
				'text-align'       : 'center',
				'top'              : '50%',
				'width'            : '100%'
			}
		},
		children : {
			tag   : 'h1',
			...states[ Math.round( beatFraction ) ]
		}
	} )
}

const loop     = () => {
	pulse()

	requestAnimationFrame( loop )
}

loop()