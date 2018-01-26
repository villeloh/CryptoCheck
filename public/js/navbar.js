'use strict';

const nav = document.querySelector('nav');

document.body.addEventListener('onload', addNavbar());

function addNavbar() {
	
	nav.innerHTML += `<div class="lowerNavPart"> 
						<a href="index.html" class="tab priceTab">Prices</a>
						<a href="news.html" class="tab newsTab">News</a>
					</div>`
}
