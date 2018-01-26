'use strict';

const baseUrl = "https://min-api.cryptocompare.com/data/news/";

document.body.addEventListener('onload', loadNews());

async function loadNews() {
	
	const main = document.querySelector('main');
	
	const news = await fetchNews(baseUrl);
	
	for (let i = 0; i < news.length; i++) {
		
		const postTimeMs = news[i].published_on * 1000; // returned in seconds		
		const formattedDateString = formatDate(postTimeMs);
		
		main.innerHTML += `<div class="newsBox"> 
						<div class="newsTitle"><a href="${news[i].url}">${news[i].title}</a></div>
						<hr>
						<div class="newsBlurb">${news[i].body}</div>
						<hr>
						<div class="postTime">${formattedDateString}</div>
						</div>`;
	}	
} // end loadNews()

function fetchNews(url) {
	
	return fetch(url)
	.then( response => response.json())
	.catch(error => console.log(error.message)); // TODO: try to handle error; throw it onwards if unable
}

// it could be in some utils.js file I guess
function formatDate(postTimeInMs) {
	
	const baseDate = new Date(postTimeInMs);
	
	let month = 1 + baseDate.getMonth();
	if (month < 10) {
		month = "0"+month;
	}
	
	let day = baseDate.getDate();
	if (day < 10) {
		day = "0"+day;
	}
	
	let hours = baseDate.getHours();
	if (hours < 10) {
		hours = "0"+hours;
	}
		
	let minutes = baseDate.getMinutes();
	if (minutes < 10) {
		minutes = "0"+minutes;
	}
	
	const elapsedHoursRaw = (Date.now() - postTimeInMs) / 3600000;
	const elapsedHoursRounded = Math.round(elapsedHoursRaw * 10) / 10; // round to 1 decimal
	
	return `${day}.${month}. ${hours}:${minutes} (${elapsedHoursRounded} hours ago)`;
}
