const beat = 60e3 / 180

loop()

function loop(){
	pulse()

	requestAnimationFrame( loop )
}

function pulse(){
  const fraction = progress()

  document.body.style.background = colour( fraction )
  
  ;[i,o].forEach( ( h1, i ) => {
    h1.style.display =
      i === Math.round( fraction ) ? 'inline' : 'none'
  })
}

function progress(){
  return ( new Date() % beat ) / beat
}

function colour( fraction ){
	const bitten = Math.round( fraction * 255 )

	return `rgb( ${
    [bitten, bitten, bitten]
  })`
}
