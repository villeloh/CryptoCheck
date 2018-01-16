'use strict';

const nav = document.querySelector('nav');

document.body.addEventListener('onload', addNavbar());

function addNavbar() {
	
	nav.innerHTML += `<div class="lowerNavPart"> 
						<div class="tab priceTab">Prices</div>
						<div class="tab newsTab">News</div>
					</div>`
}