'use strict';

// TODO: base these on market cap by default (needs a fetch in itself)
const myCoins = [
  'BTC',
  'XRP',
  'XLM',
  'ETH',
  'NEO',
  'DOGE',
  'IOT',
  'LTC',
  'BCH'
];

document.body.addEventListener('onload', loadPrices(myCoins));

async function loadPrices(arrayOfCoins) {
	
	// should have a try-catch around it, but it doesn't work for some reason... TODO: fix!
	const coins = await fetchPrices(arrayOfCoins);
		
	const main = document.querySelector('main');
	
	for (let i = 0; i < arrayOfCoins.length; i++) {
	
		// a reference to coinArray is needed here because the GET doesn't return the name of the coin... -.-
		main.innerHTML += `<div class="priceBox"> 
						<div class="coinName">${arrayOfCoins[i]+": "}</div>
						<hr>
						<div class="priceInE">${coins[i].EUR}</div>
						</div>`;
	}
	
} // end loadPrices()

function fetchPrices(coinArray) {
	
	const requests = coinArray.map(coin => fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=EUR`));
	
	return Promise.all(requests)
	.then( responses => Promise.all(
		responses.map(r => r.json())))// map responses into json (waiting for all to be ready before proceeding)
	.catch(error => console.log(error.message)); // TODO: try to handle error; throw it onwards if unable

} // end fetchPrices()
