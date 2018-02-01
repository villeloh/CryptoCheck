'use strict';

const nav = document.querySelector('nav');

document.body.addEventListener('onload', addNavbar());

function addNavbar() {
	
	nav.innerHTML += `<div class="lowerNavPart"> 
						<a href="index.html" class="tab priceTab">Prices</a>
						<a href="news.html" class="tab newsTab">News</a>
					</div>`
					
	setSelectedTab();
}

// there's probably a million better ways to do this; improve it later
function setSelectedTab() {
	
	const priceTab = document.querySelector('.priceTab');
	const newsTab = document.querySelector('.newsTab');
	const priceMain = document.querySelector('.priceMain');
	const newsMain = document.querySelector('.newsMain');
	
	if (priceMain !== null && priceMain !== undefined) {
		
		priceTab.style.textDecoration = 'underline';
		priceTab.style.color = 'red';
	}
	
	if (newsMain !== null && newsMain !== undefined) {
		
		newsTab.style.textDecoration = 'underline';
		newsTab.style.color = 'red';
	}
	
} // end setSelectedTab()
