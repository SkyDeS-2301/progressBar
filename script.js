const progressBar = document.querySelector( '.myBar' );
const label = document.querySelector( '.label' );
const buttonStart = document.querySelector( '.start' );

function move() {
	const setId = setInterval( frame, 20 )
	let widthBar = 10;

	function frame() {
		if ( widthBar >= 100 ) {
			clearInterval( setId );
		} else {
			widthBar += 5
			progressBar.style.width = `${ widthBar }%`;
			label.textContent = `${ widthBar }%`
		}
	}
}

buttonStart.addEventListener( 'click', move )