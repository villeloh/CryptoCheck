'use strict';

const baseUrl = "https://min-api.cryptocompare.com/data/news/";

document.body.addEventListener('onload', loadNews());

async function loadNews() {
	
	const main = document.querySelector('main');
	
	const news = await fetchNews(baseUrl);
	const length = news.length;
	
	for (let i = 0; i < length; i++) {
		
		const postTimeMs = news[i].published_on * 1000; // returned in seconds		
		const formattedDateString = formatDate(postTimeMs);
		
		// truncate these as needed, so they fit inside the uniformly shaped divs
		const title = news[i].title.length > 110 ? news[i].title.substring(0,107) + "..." : news[i].title;
		const blurb = news[i].body.length > 700 ? news[i].body.substring(0,697) + "..." : news[i].body;

		main.innerHTML += `<div class="newsBox"> 
						<div class="newsTitle"><a target="_blank" href="${news[i].url}">${title}</a></div>
						<hr>
						<div class="newsBlurb">${blurb}</div>
						<hr>
						<div class="postTime">${formattedDateString}</div>
						</div>`;
	}	
} // end loadNews()

function fetchNews(url) {
	
	return fetch(url)
	.then( response => response.json())
	.catch(error => console.log(error.message));
}

// it could be in some utils.js file I suppose
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
	const elapsedHoursRounded = Math.round(elapsedHoursRaw * 10) / 10; // round to 1 decimal point
	
	return `${day}.${month}. ${hours}:${minutes} (${elapsedHoursRounded} hours ago)`;
} // end formatDate()
